<?php
declare(strict_types=1);

$allowedOrigins = [
    'https://educationalsystem.fieldserviceit.com',
    'http://127.0.0.1:4573',
    'http://127.0.0.1:4173',
    'http://localhost:4573',
    'http://localhost:4173',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
    header('Vary: Origin');
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, OPTIONS');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=()');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$baseDir = __DIR__;
$dataDir = "{$baseDir}/data";
$uploadDir = "{$dataDir}/uploads";
$backupDir = "{$dataDir}/backups";
$stateFile = "{$dataDir}/educonnect-state.json";
$accountsFile = "{$dataDir}/educonnect-accounts.json";
$sessionsFile = "{$dataDir}/educonnect-sessions.json";
$rateLimitFile = "{$dataDir}/educonnect-rate-limits.json";
$sqliteFile = "{$dataDir}/educonnect.sqlite";
$maxUploadBytes = 5 * 1024 * 1024;
$allowedUploadTypes = [
    'application/pdf',
    'image/png',
    'image/jpeg',
    'text/plain',
    'text/csv',
    'application/json',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];
$managedJsonKeys = [
    'educonnect-state.json',
    'educonnect-accounts.json',
    'educonnect-sessions.json',
    'educonnect-rate-limits.json',
];

$defaultProfiles = [
    ['id' => 'state-admin', 'label' => 'NYS State Admin', 'role' => 'State Admin', 'landing' => 'state-admin', 'permissions' => ['manage-tenants', 'approve-posts', 'emergency', 'lms', 'teacher-tools', 'message', 'manage-users', 'view-compliance']],
    ['id' => 'district-admin', 'label' => 'District Admin', 'role' => 'District Admin', 'landing' => 'district-admin', 'permissions' => ['manage-tenants', 'approve-posts', 'emergency', 'lms', 'teacher-tools', 'message', 'manage-users', 'view-compliance']],
    ['id' => 'school-admin', 'label' => 'School Admin', 'role' => 'School Admin', 'landing' => 'school-admin', 'permissions' => ['approve-posts', 'emergency', 'lms', 'teacher-tools', 'message', 'manage-users', 'view-compliance']],
    ['id' => 'teacher', 'label' => 'Prof. Miller', 'role' => 'Teacher', 'landing' => 'teacher', 'permissions' => ['lms', 'teacher-tools', 'message', 'submit-post']],
    ['id' => 'student', 'label' => 'Hero', 'role' => 'Student', 'landing' => 'student', 'permissions' => ['student-missions']],
    ['id' => 'parent', 'label' => 'Sarah Jenkins', 'role' => 'Parent', 'landing' => 'parent', 'permissions' => ['message', 'submit-post']],
];

$defaultPasswords = [
    'state-admin' => 'state123',
    'district-admin' => 'admin123',
    'school-admin' => 'school123',
    'teacher' => 'teacher123',
    'parent' => 'parent123',
    'student' => 'student123',
];

function send_json(int $statusCode, array $payload): void {
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function read_json(): array {
    $raw = file_get_contents('php://input') ?: '';
    if ($raw === '') return [];
    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) send_json(400, ['ok' => false, 'error' => 'Invalid JSON']);
    return $decoded;
}

function ensure_dir(string $path): void {
    if (!is_dir($path) && !mkdir($path, 0755, true) && !is_dir($path)) {
        send_json(500, ['ok' => false, 'error' => 'Unable to create data directory']);
    }
}

function password_hash_for(string $password): string {
    return password_hash($password, PASSWORD_DEFAULT);
}

function legacy_password_hash_for(string $password): string {
    return hash('sha256', "educonnect:{$password}");
}

function verify_password_for(string $password, string $hash): bool {
    if (substr($hash, 0, 4) === '$2y$' || substr($hash, 0, 6) === '$argon') {
        return password_verify($password, $hash);
    }
    return hash_equals(legacy_password_hash_for($password), $hash);
}

function sqlite_available(): bool {
    return class_exists('PDO') && in_array('sqlite', PDO::getAvailableDrivers(), true);
}

function storage_engine(): string {
    return sqlite_available() ? 'sqlite' : 'json';
}

function db(): ?PDO {
    static $pdo = null;
    global $sqliteFile;
    if (!sqlite_available()) return null;
    if ($pdo instanceof PDO) return $pdo;
    try {
        ensure_dir(dirname($sqliteFile));
        $pdo = new PDO("sqlite:{$sqliteFile}");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->exec('CREATE TABLE IF NOT EXISTS kv_store (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT NOT NULL)');
        $pdo->exec('CREATE TABLE IF NOT EXISTS audit_events (id INTEGER PRIMARY KEY AUTOINCREMENT, action TEXT NOT NULL, actor TEXT NOT NULL, detail TEXT NOT NULL, created_at TEXT NOT NULL)');
        return $pdo;
    } catch (Throwable) {
        return null;
    }
}

function db_get_json(string $key): ?array {
    try {
        $pdo = db();
        if (!$pdo) return null;
        $statement = $pdo->prepare('SELECT value FROM kv_store WHERE key = :key');
        $statement->execute(['key' => $key]);
        $value = $statement->fetchColumn();
        if (!is_string($value)) return null;
        $decoded = json_decode($value, true);
        return is_array($decoded) ? $decoded : null;
    } catch (Throwable) {
        return null;
    }
}

function db_set_json(string $key, array $payload): void {
    try {
        $pdo = db();
        if (!$pdo) return;
        $statement = $pdo->prepare('INSERT OR REPLACE INTO kv_store (key, value, updated_at) VALUES (:key, :value, :updated_at)');
        $statement->execute([
            'key' => $key,
            'value' => json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES),
            'updated_at' => gmdate(DATE_ATOM),
        ]);
    } catch (Throwable) {
        return;
    }
}

function audit_event(string $action, string $actor = 'System', array $detail = []): void {
    try {
        $pdo = db();
        if (!$pdo) return;
        $statement = $pdo->prepare('INSERT INTO audit_events (action, actor, detail, created_at) VALUES (:action, :actor, :detail, :created_at)');
        $statement->execute([
            'action' => $action,
            'actor' => $actor,
            'detail' => json_encode($detail, JSON_UNESCAPED_SLASHES),
            'created_at' => gmdate(DATE_ATOM),
        ]);
    } catch (Throwable) {
        return;
    }
}

function default_snapshot(array $profiles): array {
    return [
        'state' => [
            'role' => 'state-admin',
            'selectedState' => 'ny',
            'selectedDistrict' => 'nyc-doe',
            'selectedSchool' => 'ps-118',
            'currentUser' => 'state-admin',
            'apiMode' => 'live-api',
            'liveUpdates' => true,
            'realtimeTick' => 0,
            'gatewayMode' => 'backend',
            'backendProvider' => 'EduConnect API',
            'authProvider' => 'Role-based secure login',
        ],
        'userProfiles' => $profiles,
        'fileUploads' => [],
        'notificationDeliveryLog' => [],
        'lmsNotifications' => [],
        'auditLogs' => [[
            'action' => 'Dedicated EduConnect API initialized',
            'tenant' => 'educationalsystem.fieldserviceit.com',
            'user' => 'System',
            'time' => gmdate(DATE_ATOM),
        ]],
    ];
}

function read_file_json(string $path, array $fallback): array {
    global $managedJsonKeys;
    $key = basename($path);
    if (in_array($key, $managedJsonKeys, true)) {
        $stored = db_get_json($key);
        if (is_array($stored)) return $stored;
    }
    if (!is_file($path)) return $fallback;
    $decoded = json_decode(file_get_contents($path) ?: '', true);
    $payload = is_array($decoded) ? $decoded : $fallback;
    if (in_array($key, $managedJsonKeys, true)) db_set_json($key, $payload);
    return $payload;
}

function write_file_json(string $path, array $payload): void {
    global $managedJsonKeys;
    $key = basename($path);
    if (in_array($key, $managedJsonKeys, true)) {
        db_set_json($key, $payload);
    }
    ensure_dir(dirname($path));
    $tmp = "{$path}." . bin2hex(random_bytes(4)) . '.tmp';
    file_put_contents($tmp, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
    rename($tmp, $path);
}

function load_accounts(string $accountsFile, array $profiles, array $defaultPasswords): array {
    $fallback = [];
    foreach ($profiles as $profile) {
        $id = $profile['id'];
        $fallback[] = [
            'profileId' => $id,
            'passwordHash' => password_hash_for($defaultPasswords[$id] ?? "{$id}123"),
            'active' => true,
            'mustChangePassword' => false,
            'updatedAt' => gmdate(DATE_ATOM),
        ];
    }
    if (!is_file($accountsFile)) write_file_json($accountsFile, $fallback);
    $accounts = read_file_json($accountsFile, $fallback);
    foreach ($fallback as $defaultAccount) {
        $exists = false;
        foreach ($accounts as $account) {
            if (($account['profileId'] ?? '') === $defaultAccount['profileId']) {
                $exists = true;
                break;
            }
        }
        if (!$exists) $accounts[] = $defaultAccount;
    }
    write_file_json($accountsFile, $accounts);
    return $accounts;
}

function load_snapshot(string $stateFile, array $profiles): array {
    if (!is_file($stateFile)) write_file_json($stateFile, default_snapshot($profiles));
    $snapshot = read_file_json($stateFile, default_snapshot($profiles));
    $snapshot['state']['apiMode'] = 'live-api';
    if (($snapshot['state']['role'] ?? '') === 'platform') $snapshot['state']['role'] = 'state-admin';
    if (($snapshot['state']['currentUser'] ?? '') === 'district-admin' && !in_array('state-admin', array_column($snapshot['userProfiles'] ?? [], 'id'), true)) {
        $snapshot['state']['currentUser'] = 'state-admin';
    }
    foreach ($profiles as $defaultProfile) {
        $exists = false;
        foreach ($snapshot['userProfiles'] ?? [] as $profile) {
            if (($profile['id'] ?? '') === $defaultProfile['id']) {
                $exists = true;
                break;
            }
        }
        if (!$exists) $snapshot['userProfiles'][] = $defaultProfile;
    }
    write_file_json($stateFile, $snapshot);
    return $snapshot;
}

function save_snapshot(string $stateFile, array $snapshot): void {
    if (!isset($snapshot['state']) || !isset($snapshot['userProfiles']) || !is_array($snapshot['userProfiles'])) {
        send_json(400, ['ok' => false, 'error' => 'Invalid snapshot']);
    }
    $snapshot['state']['apiMode'] = 'live-api';
    write_file_json($stateFile, $snapshot);
}

function bearer_token(): string {
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (stripos($header, 'Bearer ') === 0) return trim(substr($header, 7));
    return '';
}

function load_sessions(string $sessionsFile): array {
    $sessions = read_file_json($sessionsFile, []);
    $cutoff = time() - 86400;
    return array_filter($sessions, fn($session) => ($session['createdAt'] ?? 0) >= $cutoff);
}

function save_sessions(string $sessionsFile, array $sessions): void {
    write_file_json($sessionsFile, array_values($sessions));
}

function current_session(string $sessionsFile): ?array {
    $token = bearer_token();
    if ($token === '') return null;
    foreach (load_sessions($sessionsFile) as $session) {
        if (($session['token'] ?? '') === $token) return $session;
    }
    return null;
}

function require_session(string $sessionsFile, bool $adminOnly = false): array {
    $session = current_session($sessionsFile);
    if (!$session) send_json(401, ['ok' => false, 'error' => 'Authentication required']);
    $permissions = $session['user']['permissions'] ?? [];
    if ($adminOnly && !in_array('manage-users', $permissions, true)) {
        send_json(403, ['ok' => false, 'error' => 'Admin permission required']);
    }
    return $session;
}

function public_user(array $profile, ?array $account): array {
    $profile['active'] = ($account['active'] ?? true) !== false;
    $profile['mustChangePassword'] = (bool)($account['mustChangePassword'] ?? false);
    return $profile;
}

function client_ip(): string {
    $forwarded = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
    if ($forwarded !== '') return trim(explode(',', $forwarded)[0]);
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function rate_limit(string $bucket, int $limit, int $windowSeconds): void {
    global $rateLimitFile;
    $now = time();
    $key = "{$bucket}:" . client_ip();
    $limits = read_file_json($rateLimitFile, []);
    $entry = $limits[$key] ?? ['count' => 0, 'resetAt' => $now + $windowSeconds];
    if (($entry['resetAt'] ?? 0) <= $now) {
        $entry = ['count' => 0, 'resetAt' => $now + $windowSeconds];
    }
    $entry['count'] = ($entry['count'] ?? 0) + 1;
    $limits[$key] = $entry;
    foreach ($limits as $limitKey => $limitEntry) {
        if (($limitEntry['resetAt'] ?? 0) <= $now - 60) unset($limits[$limitKey]);
    }
    write_file_json($rateLimitFile, $limits);
    if ($entry['count'] > $limit) {
        header('Retry-After: ' . max(1, ($entry['resetAt'] ?? $now) - $now));
        send_json(429, ['ok' => false, 'error' => 'Too many requests. Please try again shortly.']);
    }
}

function ensure_strong_password(string $password): void {
    if (strlen($password) < 8 || !preg_match('/[A-Za-z]/', $password) || !preg_match('/\d/', $password)) {
        send_json(400, ['ok' => false, 'error' => 'Password must be at least 8 characters and include letters and numbers']);
    }
}

function backup_files(string $backupDir): array {
    ensure_dir($backupDir);
    $files = array_values(array_filter(scandir($backupDir) ?: [], fn($file) => substr($file, -5) === '.json'));
    rsort($files);
    return $files;
}

ensure_dir($dataDir);

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

try {
    rate_limit('api', 180, 60);

    if ($path === '/api/health' && $method === 'GET') {
        send_json(200, ['ok' => true, 'service' => 'educonnect-dedicated-api', 'mode' => 'operational', 'storage' => storage_engine(), 'time' => gmdate(DATE_ATOM)]);
    }

    if ($path === '/api/state' && $method === 'GET') {
        send_json(200, ['ok' => true, 'snapshot' => load_snapshot($stateFile, $defaultProfiles)]);
    }

    if ($path === '/api/state' && $method === 'PUT') {
        $body = read_json();
        save_snapshot($stateFile, $body['snapshot'] ?? []);
        send_json(200, ['ok' => true, 'savedAt' => gmdate(DATE_ATOM)]);
    }

    if ($path === '/api/reset' && $method === 'POST') {
        $snapshot = default_snapshot($defaultProfiles);
        save_snapshot($stateFile, $snapshot);
        send_json(200, ['ok' => true, 'snapshot' => $snapshot]);
    }

    if ($path === '/api/login' && $method === 'POST') {
        rate_limit('login', 8, 900);
        $body = read_json();
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $profiles = $snapshot['userProfiles'] ?? $defaultProfiles;
        $accounts = load_accounts($accountsFile, $profiles, $defaultPasswords);
        $profile = null;
        foreach ($profiles as $item) if (($item['id'] ?? '') === ($body['profileId'] ?? '')) $profile = $item;
        $account = null;
        foreach ($accounts as $item) if (($item['profileId'] ?? '') === ($body['profileId'] ?? '')) $account = $item;
        if (!$profile || !$account || ($account['active'] ?? true) === false || !verify_password_for((string)($body['password'] ?? ''), (string)($account['passwordHash'] ?? ''))) {
            send_json(401, ['ok' => false, 'error' => 'Invalid credentials']);
        }
        if (substr((string)$account['passwordHash'], 0, 4) !== '$2y$' && substr((string)$account['passwordHash'], 0, 6) !== '$argon') {
            foreach ($accounts as &$storedAccount) {
                if (($storedAccount['profileId'] ?? '') === ($body['profileId'] ?? '')) {
                    $storedAccount['passwordHash'] = password_hash_for((string)$body['password']);
                    $storedAccount['updatedAt'] = gmdate(DATE_ATOM);
                    break;
                }
            }
            write_file_json($accountsFile, $accounts);
        }
        $token = bin2hex(random_bytes(24));
        $sessions = load_sessions($sessionsFile);
        $sessions[] = ['token' => $token, 'user' => $profile, 'createdAt' => time()];
        save_sessions($sessionsFile, $sessions);
        audit_event('login', $profile['id'], ['role' => $profile['role'] ?? 'Unknown']);
        send_json(200, ['ok' => true, 'token' => $token, 'user' => $profile]);
    }

    if ($path === '/api/session' && $method === 'GET') {
        $session = current_session($sessionsFile);
        if (!$session) send_json(401, ['ok' => false, 'error' => 'No active session']);
        send_json(200, ['ok' => true, 'user' => $session['user']]);
    }

    if ($path === '/api/users' && $method === 'GET') {
        require_session($sessionsFile, true);
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $profiles = $snapshot['userProfiles'] ?? $defaultProfiles;
        $accounts = load_accounts($accountsFile, $profiles, $defaultPasswords);
        $users = array_map(function ($profile) use ($accounts) {
            $account = null;
            foreach ($accounts as $item) if (($item['profileId'] ?? '') === ($profile['id'] ?? '')) $account = $item;
            return public_user($profile, $account);
        }, $profiles);
        send_json(200, ['ok' => true, 'users' => $users]);
    }

    if ($path === '/api/users' && $method === 'POST') {
        require_session($sessionsFile, true);
        $body = read_json();
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $id = strtolower(preg_replace('/[^a-z0-9-]+/i', '-', (string)($body['id'] ?? strtolower((string)($body['role'] ?? 'user')) . '-' . time())));
        foreach ($snapshot['userProfiles'] as $profile) if (($profile['id'] ?? '') === $id) send_json(409, ['ok' => false, 'error' => 'User already exists']);
        $role = (string)($body['role'] ?? 'Student');
        $permissions = is_array($body['permissions'] ?? null) ? $body['permissions'] : ($role === 'Admin' ? ['manage-tenants', 'approve-posts', 'emergency', 'lms', 'teacher-tools', 'message', 'manage-users', 'view-compliance'] : ($role === 'Teacher' ? ['lms', 'teacher-tools', 'message', 'submit-post'] : ($role === 'Parent' ? ['message', 'submit-post'] : ['student-missions'])));
        $profile = ['id' => $id, 'label' => $body['label'] ?? 'New User', 'role' => $role, 'landing' => $body['landing'] ?? ($role === 'Admin' ? 'school-admin' : strtolower($role)), 'permissions' => $permissions];
        $snapshot['userProfiles'][] = $profile;
        save_snapshot($stateFile, $snapshot);
        $accounts = load_accounts($accountsFile, $snapshot['userProfiles'], $defaultPasswords);
        ensure_strong_password((string)($body['password'] ?? 'changeme123'));
        $accounts[] = ['profileId' => $id, 'passwordHash' => password_hash_for((string)($body['password'] ?? 'changeme123')), 'active' => true, 'mustChangePassword' => true, 'updatedAt' => gmdate(DATE_ATOM)];
        write_file_json($accountsFile, $accounts);
        audit_event('user.created', require_session($sessionsFile, true)['user']['id'] ?? 'admin', ['profileId' => $id, 'role' => $role]);
        send_json(201, ['ok' => true, 'user' => public_user($profile, end($accounts)), 'temporaryPassword' => isset($body['password']) ? null : 'changeme123']);
    }

    if (preg_match('#^/api/users/([^/]+)$#', $path, $matches) && $method === 'PATCH') {
        require_session($sessionsFile, true);
        $body = read_json();
        $accounts = load_accounts($accountsFile, $defaultProfiles, $defaultPasswords);
        foreach ($accounts as &$account) {
            if (($account['profileId'] ?? '') === $matches[1]) {
                if (array_key_exists('active', $body)) $account['active'] = (bool)$body['active'];
                if (!empty($body['password'])) {
                    ensure_strong_password((string)$body['password']);
                    $account['passwordHash'] = password_hash_for((string)$body['password']);
                    $account['mustChangePassword'] = (bool)($body['mustChangePassword'] ?? false);
                }
                $account['updatedAt'] = gmdate(DATE_ATOM);
                write_file_json($accountsFile, $accounts);
                audit_event('user.updated', require_session($sessionsFile, true)['user']['id'] ?? 'admin', ['profileId' => $account['profileId'], 'active' => $account['active']]);
                send_json(200, ['ok' => true, 'account' => ['profileId' => $account['profileId'], 'active' => $account['active'], 'mustChangePassword' => $account['mustChangePassword']]]);
            }
        }
        send_json(404, ['ok' => false, 'error' => 'User account not found']);
    }

    if ($path === '/api/files' && $method === 'GET') {
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        send_json(200, ['ok' => true, 'files' => $snapshot['fileUploads'] ?? []]);
    }

    if ($path === '/api/files' && $method === 'POST') {
        $body = read_json();
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $id = 'upload-' . time() . '-' . bin2hex(random_bytes(4));
        $storedPath = '';
        if (!empty($body['contentBase64'])) {
            $type = (string)($body['type'] ?? 'application/octet-stream');
            if (!in_array($type, $allowedUploadTypes, true)) {
                send_json(415, ['ok' => false, 'error' => 'File type is not allowed']);
            }
            $decodedUpload = base64_decode((string)$body['contentBase64'], true);
            if ($decodedUpload === false) send_json(400, ['ok' => false, 'error' => 'Invalid file content']);
            if (strlen($decodedUpload) > $maxUploadBytes) send_json(413, ['ok' => false, 'error' => 'File exceeds 5 MB limit']);
            ensure_dir($uploadDir);
            $safeName = preg_replace('/[^a-z0-9._-]+/i', '-', (string)($body['name'] ?? 'upload.bin'));
            $storedPath = "{$uploadDir}/{$id}-{$safeName}";
            file_put_contents($storedPath, $decodedUpload, LOCK_EX);
        }
        $file = ['id' => $id, 'name' => $body['name'] ?? 'Uploaded file', 'area' => $body['area'] ?? 'LMS', 'size' => $body['size'] ?? 'Unknown', 'status' => $storedPath ? 'Stored on dedicated API' : 'Metadata stored on dedicated API', 'type' => $body['type'] ?? 'application/octet-stream', 'storedPath' => $storedPath ? str_replace($dataDir, 'data', $storedPath) : ''];
        $snapshot['fileUploads'] = array_merge([$file], $snapshot['fileUploads'] ?? []);
        save_snapshot($stateFile, $snapshot);
        audit_event('file.uploaded', 'api', ['fileId' => $id, 'name' => $file['name']]);
        send_json(201, ['ok' => true, 'file' => $file]);
    }

    if ($path === '/api/notifications/test' && $method === 'POST') {
        $body = read_json();
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $channels = is_array($body['channels'] ?? null) ? $body['channels'] : ['Email', 'SMS', 'Push'];
        $records = array_map(fn($channel) => ['id' => 'delivery-' . time() . '-' . $channel, 'channel' => $channel, 'audience' => $body['audience'] ?? 'Launch test group', 'status' => 'Delivered', 'detail' => "{$channel} test generated by dedicated EduConnect API"], $channels);
        $snapshot['notificationDeliveryLog'] = array_merge($records, $snapshot['notificationDeliveryLog'] ?? []);
        $snapshot['lmsNotifications'] = array_merge([['id' => 'notice-' . time(), 'level' => 'FYI', 'title' => 'Notification delivery test completed', 'target' => $body['audience'] ?? 'Launch Control', 'channel' => 'Dedicated API', 'read' => false]], $snapshot['lmsNotifications'] ?? []);
        save_snapshot($stateFile, $snapshot);
        send_json(201, ['ok' => true, 'records' => $records]);
    }

    if ($path === '/api/backups' && $method === 'GET') {
        send_json(200, ['ok' => true, 'backups' => backup_files($backupDir)]);
    }

    if ($path === '/api/backups' && $method === 'POST') {
        require_session($sessionsFile, true);
        ensure_dir($backupDir);
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $name = 'educonnect-backup-' . gmdate('Y-m-d-H-i-s') . '.json';
        write_file_json("{$backupDir}/{$name}", $snapshot);
        audit_event('backup.created', require_session($sessionsFile, true)['user']['id'] ?? 'admin', ['backup' => $name]);
        send_json(201, ['ok' => true, 'backup' => $name]);
    }

    if ($path === '/api/admin/status' && $method === 'GET') {
        require_session($sessionsFile, true);
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $accounts = load_accounts($accountsFile, $snapshot['userProfiles'] ?? $defaultProfiles, $defaultPasswords);
        send_json(200, [
            'ok' => true,
            'status' => [
                'storage' => storage_engine(),
                'sqliteAvailable' => sqlite_available(),
                'phpVersion' => PHP_VERSION,
                'users' => count($snapshot['userProfiles'] ?? []),
                'activeAccounts' => count(array_filter($accounts, fn($account) => ($account['active'] ?? true) !== false)),
                'backups' => count(backup_files($backupDir)),
                'maxUploadMb' => 5,
                'allowedUploadTypes' => $GLOBALS['allowedUploadTypes'],
                'sessionTtlHours' => 24,
            ],
        ]);
    }

    if ($path === '/api/admin/setup' && $method === 'POST') {
        $session = require_session($sessionsFile, true);
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $snapshot['state']['backendProvider'] = 'Dedicated EduConnect API';
        $snapshot['state']['authProvider'] = 'Role-based secure login';
        $snapshot['state']['gatewayMode'] = 'backend';
        save_snapshot($stateFile, $snapshot);
        ensure_dir($backupDir);
        $name = 'educonnect-setup-' . gmdate('Y-m-d-H-i-s') . '.json';
        write_file_json("{$backupDir}/{$name}", $snapshot);
        audit_event('admin.setup.completed', $session['user']['id'] ?? 'admin', ['backup' => $name]);
        send_json(200, ['ok' => true, 'setup' => 'complete', 'backup' => $name, 'storage' => storage_engine()]);
    }

    send_json(404, ['ok' => false, 'error' => 'Not found']);
} catch (Throwable $error) {
    send_json(500, ['ok' => false, 'error' => $error->getMessage()]);
}
