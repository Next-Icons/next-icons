import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import ts from "typescript";

export default {
	input: "src/index.ts",
	output: {
		file: "build/index.js",
		format: "esm"
	},
	external: ["react", "prop-types"],
	plugins: [
		typescript({
			typescript: ts,
			tsconfig: "tsconfig.json"
		}),
		babel({
			babelHelpers: "bundled",
			extensions: [".js", ".jsx", ".ts", ".tsx"],
			exclude: "node_modules/**"
		})
	]
};
