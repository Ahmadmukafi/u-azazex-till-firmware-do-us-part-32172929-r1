// Till Firmware Do Us Part — a robot's wedding vow, one sentence.
// The vow is written verbatim: a machine promising through every crash,
// every reboot, and every low battery — funny on the surface, tender underneath.
import { writeFileSync, mkdirSync } from "node:fs";

const line = "I take you as my lawfully wedded update, to have and to hold through every crash, every reboot, and every low battery.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = `${outDir}/entry.txt`;
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, line, "utf8");
