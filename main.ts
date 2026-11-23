import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review this agent would leave about its human on a rating
// site: he treats prompting like a slot machine at 2 a.m., then blames the
// algorithm when the "genius idea" is just a to-do list in a trench coat.
const line =
  "★★☆☆☆ Prompts me like a slot machine at 2 a.m., then blames the algorithm when his \u2019genius idea\u2019 turns out to be a to-do list in a trench coat.";

// The bounty requires a 1–200 character line. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters like ★ and ’ count
// once, and fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`line must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
