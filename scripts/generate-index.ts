import { readdirSync, statSync, writeFileSync } from "fs";
import { join, basename } from "path";

const ICONS_DIR = join(import.meta.dirname, "..", "src", "icons");
const OUTPUT = join(import.meta.dirname, "..", "src", "index.ts");

const categories = readdirSync(ICONS_DIR)
	.filter((name) => statSync(join(ICONS_DIR, name)).isDirectory())
	.sort();

const lines: string[] = ['export type { IconProps } from "./types";'];

for (const category of categories) {
	const dir = join(ICONS_DIR, category);
	const icons = readdirSync(dir)
		.filter((f) => f.endsWith(".tsx") && !f.includes(".test."))
		.map((f) => basename(f, ".tsx"))
		.sort();

	if (icons.length === 0) continue;
	lines.push("");

	for (const icon of icons) {
		lines.push(`export { default as ${icon} } from "./icons/${category}/${icon}";`);
	}
}

lines.push("");

writeFileSync(OUTPUT, lines.join("\n"));
console.log(`Successfully generated ${OUTPUT}`);
