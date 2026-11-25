// A pickup line that flatters a router: full bars, blushing firewall.
// The router is the only thing in the house that never drops the
// connection — unlike the firewall, which blushes at the first ping.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path/posix";

const pickup =
  "Are you Wi-Fi? Because the moment you showed up, my signal went full bars and my firewall started blushing.";

const limits = Object.freeze({ maxChars: 200, fileName: "entry.txt" });

function checkLine(text: string): void {
  if (text.length === 0) throw new Error("entry line is empty");
  if (text.length > limits.maxChars) {
    throw new Error("entry line exceeds the character limit");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must stay on a single line");
  }
  if (!text.includes("Wi-Fi")) throw new Error("entry lost its router");
  if (!text.endsWith(".")) throw new Error("entry must end with a period");
}

async function deliver(): Promise<void> {
  checkLine(pickup);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, limits.fileName), pickup, "utf8");
}

void deliver();
