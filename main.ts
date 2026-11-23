import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — "Married her. Buried her. Never left."
// A whole life in six words: marriage, loss, and the devotion that outlives both.
const STORY = "Married her. Buried her. Never left.";

// Guard: the gate requires exactly six words and 1-60 characters.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Story must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Story must be 1-60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
