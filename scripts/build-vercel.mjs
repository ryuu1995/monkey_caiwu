import { copyFile, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const outputDir = resolve("vercel-dist");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

await copyFile(resolve("index.html"), resolve(outputDir, "index.html"));
await copyFile(resolve("styles.css"), resolve(outputDir, "styles.css"));
