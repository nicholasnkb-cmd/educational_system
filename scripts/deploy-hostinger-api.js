import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import SftpClient from "ssh2-sftp-client";

const required = [
  "HOSTINGER_SFTP_HOST",
  "HOSTINGER_SFTP_USER",
  "HOSTINGER_SFTP_PASSWORD",
  "HOSTINGER_API_REMOTE_DIR",
];
const missing = required.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const localDir = path.resolve("api");
const remoteDir = process.env.HOSTINGER_API_REMOTE_DIR.replace(/\/+$/, "");
const expectedRemoteSuffix = "/domains/educationalsystem.fieldserviceit.com/public_html/educonnect-api";
if (!remoteDir.replace(/\\/g, "/").endsWith(expectedRemoteSuffix)) {
  console.error(`Refusing deployment: HOSTINGER_API_REMOTE_DIR must end with ${expectedRemoteSuffix}`);
  process.exit(1);
}

const sftp = new SftpClient();

async function ensureRemoteDirectory(dir) {
  const exists = await sftp.exists(dir);
  if (!exists) await sftp.mkdir(dir, true);
}

async function uploadDirectory(localPath, remotePath) {
  await ensureRemoteDirectory(remotePath);
  const entries = await fs.readdir(localPath, { withFileTypes: true });
  for (const entry of entries) {
    const source = path.join(localPath, entry.name);
    const target = `${remotePath}/${entry.name}`;
    if (entry.isDirectory()) {
      await uploadDirectory(source, target);
    } else {
      await sftp.fastPut(source, target);
      console.log(`Uploaded ${target}`);
    }
  }
}

try {
  await fs.access(path.join(localDir, "index.php"));
  await sftp.connect({
    host: process.env.HOSTINGER_SFTP_HOST,
    port: Number(process.env.HOSTINGER_SFTP_PORT || 22),
    username: process.env.HOSTINGER_SFTP_USER,
    password: process.env.HOSTINGER_SFTP_PASSWORD,
  });
  await uploadDirectory(localDir, remoteDir);
  console.log(`Education API deployment complete: ${remoteDir}`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  await sftp.end().catch(() => {});
}
