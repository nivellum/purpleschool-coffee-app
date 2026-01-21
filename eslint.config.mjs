// https://docs.expo.dev/guides/using-eslint/
import { defineConfig } from "eslint/config";
import tsEslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default defineConfig([
	{
		ignores: [
			"**/node_modules/**",
			"**/android/**", // ← Android native code
			"**/ios/**", // ← iOS native code
			"**/__tests__/**",
			"**/dist/**",
			"**/build/**",
			"**/*.d.ts",
			".expo/**",
			"metro.config.js",
			"babel.config.js",
		],
	},
	tsEslint.configs.recommended,
	eslintConfigPrettier,
	pluginJs.configs.recommended,
	{
		plugins: {
			react: pluginReact,
			"react-native": pluginReactNative,
			"react-hooks": pluginReactHooks,
			prettier: eslintPluginPrettier,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			"react-native/no-inline-styles": "error",
			"react-native/no-color-literals": "error",
			"react-native/no-raw-text": "error",
			"@typescript-eslint/no-unused-expressions": [
				"error",
				{ allowShortCircuit: true, allowTernary: true },
			],
			"@typescript-eslint/no-require-imports": "off",
			"prettier/prettier": "error",
		},
	},
]);
