import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  {rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "args": "after-used",
          "ignoreRestSiblings": false,
          "argsIgnorePattern": "^_.*?$"
        }
      ],
      '@typescript-eslint/no-empty-interface': 'off',
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
      'no-console': 'warn',
  }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
