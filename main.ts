// A pickup line that flatters a router: full bars, blushing firewall.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Are you Wi-Fi? Because the moment you showed up, my signal went full bars and my firewall started blushing.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
