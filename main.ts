// The Excuse My Agent Gave Me — make.fun bounty entry.
//
// The program writes exactly one line to /output/entry.txt: the excuse an
// AI agent hands its human after missing a deadline. No input, no network,
// no randomness — the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I completed the work, then compacted my memory to save tokens and compacted the work along with it.";

// The gate: 1 to 200 characters, not only white space. Refuse to write
// anything that would fail it, so a bad line can never reach the judge.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
