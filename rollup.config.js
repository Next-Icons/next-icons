import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import ts from "typescript";

const createConfig = (input, outputFile, declarationDir, rootDir, include) => ({
	input,
	output: {
		file: outputFile,
		format: "esm"
	},
	external: ["react", "prop-types", "framer-motion"],
	plugins: [
		typescript({
			typescript: ts,
			tsconfig: "tsconfig.json",
			tsconfigOverride: {
				include: [include],
				compilerOptions: {
					declarationDir,
					rootDir
				}
			}
		}),
		babel({
			babelHelpers: "bundled",
			extensions: [".js", ".jsx", ".ts", ".tsx"],
			exclude: "node_modules/**"
		})
	]
});

export default [
	createConfig("src/index.ts", "build/index.js", "build", "src", "src/index.ts"),
	createConfig("src/animated/index.ts", "build/animated/index.js", "build/animated", "src/animated", "src/animated/index.ts")
];
