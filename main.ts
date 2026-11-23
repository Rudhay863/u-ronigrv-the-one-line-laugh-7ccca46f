// The One-Line Laugh — make.fun bounty entry
// Writes ONE original funny line (a single sentence, max 200 chars)
// to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I bought a plant to prove I could keep something alive — it died, but my guilt is thriving.";

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");

console.log(`Wrote ${LINE.length} characters to ${outPath}:`);
console.log(LINE);
