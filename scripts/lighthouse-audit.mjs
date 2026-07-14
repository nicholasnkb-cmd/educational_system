import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const url = process.env.LIGHTHOUSE_URL || "http://127.0.0.1:4173";
const chrome = await chromeLauncher.launch({
  chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
});

try {
  const result = await lighthouse(url, {
    port: chrome.port,
    logLevel: "error",
    output: "json",
    onlyCategories: ["accessibility", "best-practices", "performance"],
  });
  const scores = Object.fromEntries(Object.entries(result.lhr.categories).map(([id, category]) => [id, Math.round(category.score * 100)]));
  process.stdout.write(`${JSON.stringify({ url, scores })}\n`);
  const minimums = { accessibility: 90, "best-practices": 85, performance: 70 };
  const failures = Object.entries(minimums).filter(([id, minimum]) => scores[id] < minimum);
  if (failures.length) {
    throw new Error(`Lighthouse thresholds failed: ${failures.map(([id, minimum]) => `${id} ${scores[id]} < ${minimum}`).join(", ")}`);
  }
} finally {
  try {
    await chrome.kill();
  } catch (error) {
    process.stderr.write(`Lighthouse browser cleanup warning: ${error.message}\n`);
  }
}
