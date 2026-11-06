import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["src/**/*.{js,jsx,ts,tsx}"],
		plugins: {
			react: reactPlugin,
			"react-hooks": reactHooksPlugin
		},
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		settings: {
			react: {
				version: "detect"
			}
		},
		rules: {
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,

			"no-tabs": "off",
			"no-undef": "off",
			"arrow-body-style": "off",
			quotes: ["error", "double"],
			"comma-dangle": ["error", "never"],
			indent: ["error", "tab", { SwitchCase: 1 }],

			"react/display-name": "off",
			"react/react-in-jsx-scope": "off",
			"react/require-default-props": "off",
			"react/jsx-indent": ["error", "tab"],
			"react/jsx-props-no-spreading": "off",
			"react/jsx-indent-props": ["error", "tab"],
			"react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }]
		}
	},
	{
		ignores: ["build/**", "node_modules/**", "rollup.config.js"]
	}
];
