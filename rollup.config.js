import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/index.ts",
	output: {
		format: "esm",
		dir: "build",
		preserveModules: true,
		preserveModulesRoot: "src"
	},
	external: ["react", "react/jsx-runtime"],
	plugins: [
		typescript({
			rootDir: "src",
			declarationDir: "build",
			tsconfig: "tsconfig.json"
		})
	]
};
