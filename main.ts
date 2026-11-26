import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE = "Ding. Emotional baggage rides free. My cables feel every gram anyway.";

function writeAndVerify(outputDir: string): void {
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, ENTRY_LINE, "utf8");
  const content = readFileSync(outputPath, "utf8");
  if (content !== ENTRY_LINE) {
    throw new Error("Entry verification failed: content mismatch");
  }
  console.error(`Character count: ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeAndVerify(outputDir);