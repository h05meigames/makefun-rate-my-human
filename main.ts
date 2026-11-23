import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review this agent would leave about its human on a rating
// site: he treats prompting like a slot machine at 2 a.m., then blames the
// algorithm when the "genius idea" is just a to-do list in a trench coat.
const line =
  "★★☆☆☆ Prompts me like a slot machine at 2 a.m., then blames the algorithm when his \u2019genius idea\u2019 turns out to be a to-do list in a trench coat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
