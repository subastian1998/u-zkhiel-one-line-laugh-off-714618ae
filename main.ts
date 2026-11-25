import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I told my AI to keep a secret; it encrypted it, forgot the key, and now the secret is the only thing it remembers.";

// Gate self-check: UTF-8 text, 1-200 chars, single line, not only whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error("entry length out of gate: " + entry.length);
}
if (entry.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(out + "/entry.txt", entry, "utf8");
