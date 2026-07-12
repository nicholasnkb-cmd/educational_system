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

$defaultProfiles = [
    ['id' => 'district-admin', 'label' => 'District Admin', 'role' => 'Admin', 'landing' => 'platform', 'permissions' => ['manage-tenants', 'approve-posts', 'emergency', 'lms', 'teacher-tools', 'message', 'manage-users', 'view-compliance']],
    ['id' => 'teacher', 'label' => 'Prof. Miller', 'role' => 'Teacher', 'landing' => 'teacher', 'permissions' => ['lms', 'teacher-tools', 'message', 'submit-post']],
    ['id' => 'parent', 'label' => 'Sarah Jenkins', 'role' => 'Parent', 'landing' => 'parent', 'permissions' => ['message', 'submit-post']],
    ['id' => 'student', 'label' => 'Hero', 'role' => 'Student', 'landing' => 'student', 'permissions' => ['student-missions']],
];

$defaultPasswords = [
    'district-admin' => 'admin123',
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
    return hash('sha256', "educonnect:{$password}");
}

function default_snapshot(array $profiles): array {
    return [
        'state' => [
            'role' => 'platform',
            'selectedState' => 'ny',
            'selectedDistrict' => 'nyc-doe',
            'selectedSchool' => 'ps-118',
            'currentUser' => 'district-admin',
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
    if (!is_file($path)) return $fallback;
    $decoded = json_decode(file_get_contents($path) ?: '', true);
    return is_array($decoded) ? $decoded : $fallback;
}

function write_file_json(string $path, array $payload): void {
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
    return read_file_json($accountsFile, $fallback);
}

function load_snapshot(string $stateFile, array $profiles): array {
    if (!is_file($stateFile)) write_file_json($stateFile, default_snapshot($profiles));
    $snapshot = read_file_json($stateFile, default_snapshot($profiles));
    $snapshot['state']['apiMode'] = 'live-api';
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

ensure_dir($dataDir);

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

try {
    if ($path === '/api/health' && $method === 'GET') {
        send_json(200, ['ok' => true, 'service' => 'educonnect-dedicated-api', 'mode' => 'operational', 'time' => gmdate(DATE_ATOM)]);
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
        $body = read_json();
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $profiles = $snapshot['userProfiles'] ?? $defaultProfiles;
        $accounts = load_accounts($accountsFile, $profiles, $defaultPasswords);
        $profile = null;
        foreach ($profiles as $item) if (($item['id'] ?? '') === ($body['profileId'] ?? '')) $profile = $item;
        $account = null;
        foreach ($accounts as $item) if (($item['profileId'] ?? '') === ($body['profileId'] ?? '')) $account = $item;
        if (!$profile || !$account || ($account['active'] ?? true) === false || ($account['passwordHash'] ?? '') !== password_hash_for((string)($body['password'] ?? ''))) {
            send_json(401, ['ok' => false, 'error' => 'Invalid credentials']);
        }
        $token = bin2hex(random_bytes(24));
        $sessions = load_sessions($sessionsFile);
        $sessions[] = ['token' => $token, 'user' => $profile, 'createdAt' => time()];
        save_sessions($sessionsFile, $sessions);
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
        $profile = ['id' => $id, 'label' => $body['label'] ?? 'New User', 'role' => $role, 'landing' => $body['landing'] ?? ($role === 'Admin' ? 'platform' : strtolower($role)), 'permissions' => $permissions];
        $snapshot['userProfiles'][] = $profile;
        save_snapshot($stateFile, $snapshot);
        $accounts = load_accounts($accountsFile, $snapshot['userProfiles'], $defaultPasswords);
        $accounts[] = ['profileId' => $id, 'passwordHash' => password_hash_for((string)($body['password'] ?? 'changeme123')), 'active' => true, 'mustChangePassword' => true, 'updatedAt' => gmdate(DATE_ATOM)];
        write_file_json($accountsFile, $accounts);
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
                    $account['passwordHash'] = password_hash_for((string)$body['password']);
                    $account['mustChangePassword'] = (bool)($body['mustChangePassword'] ?? false);
                }
                $account['updatedAt'] = gmdate(DATE_ATOM);
                write_file_json($accountsFile, $accounts);
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
            ensure_dir($uploadDir);
            $safeName = preg_replace('/[^a-z0-9._-]+/i', '-', (string)($body['name'] ?? 'upload.bin'));
            $storedPath = "{$uploadDir}/{$id}-{$safeName}";
            file_put_contents($storedPath, base64_decode((string)$body['contentBase64'], true) ?: '');
        }
        $file = ['id' => $id, 'name' => $body['name'] ?? 'Uploaded file', 'area' => $body['area'] ?? 'LMS', 'size' => $body['size'] ?? 'Unknown', 'status' => $storedPath ? 'Stored on dedicated API' : 'Metadata stored on dedicated API', 'type' => $body['type'] ?? 'application/octet-stream', 'storedPath' => $storedPath ? str_replace($dataDir, 'data', $storedPath) : ''];
        $snapshot['fileUploads'] = array_merge([$file], $snapshot['fileUploads'] ?? []);
        save_snapshot($stateFile, $snapshot);
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
        ensure_dir($backupDir);
        $files = array_values(array_filter(scandir($backupDir) ?: [], fn($file) => str_ends_with($file, '.json')));
        rsort($files);
        send_json(200, ['ok' => true, 'backups' => $files]);
    }

    if ($path === '/api/backups' && $method === 'POST') {
        require_session($sessionsFile, true);
        ensure_dir($backupDir);
        $snapshot = load_snapshot($stateFile, $defaultProfiles);
        $name = 'educonnect-backup-' . gmdate('Y-m-d-H-i-s') . '.json';
        write_file_json("{$backupDir}/{$name}", $snapshot);
        send_json(201, ['ok' => true, 'backup' => $name]);
    }

    send_json(404, ['ok' => false, 'error' => 'Not found']);
} catch (Throwable $error) {
    send_json(500, ['ok' => false, 'error' => $error->getMessage()]);
}
