import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
	js.configs.recommended,

	{
		files: ["**/*.js", "**/*.jsx"],

		languageOptions: {
			parser: babelParser,

			parserOptions: {
				requireConfigFile: false,

				babelOptions: {
					presets: [
						"@babel/preset-env",
						"@babel/preset-react"
					]
				},

				ecmaVersion: 2018,
				sourceType: "module",
				ecmaFeatures: {
					jsx: true
				}
			},

			globals: {
				...globals.browser,
				Atomics: "readonly",
				SharedArrayBuffer: "readonly"
			}
		},

		plugins: {
			react: reactPlugin
		},

		settings: {
			react: {
				version: "detect"
			}
		},

		rules: {
			"no-tabs": ["error", { allowIndentationTabs: true }],
			"indent": ["error", "tab"],
			"max-len": ["error", { code: 80 }],
			"brace-style": ["error", "allman"],

			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",

			"react/jsx-indent": [2, "tab"],
			"react/jsx-indent-props": [2, "tab"],
			"react/static-property-placement": [
				"error",
				"static public field"
			]
		}
	}
];
