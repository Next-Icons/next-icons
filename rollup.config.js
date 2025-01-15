import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";

export default {
	input: "src/index.ts",
	output: {
		file: "build/index.js",
		format: "esm"
	},
	external: ["react", "prop-types"],
	plugins: [
		typescript({
			typescript: require("typescript"),
			tsconfig: "tsconfig.json"
		}),
		babel({
			extensions: [".js", ".jsx", ".ts", ".tsx"],
			exclude: "node_modules/**"
		})
	]
};
