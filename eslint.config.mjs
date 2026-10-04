import js from "@eslint/js";
import globals from "globals";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";

// Composed directly from the Next.js and react-hooks plugins instead of
// eslint-config-next: the shared config pulls in typescript-eslint, which
// does not support the TypeScript 7 (native) API this repo compiles with
// (typescript-eslint#10940). Undefined-name checking stays with `tsc`,
// which is stricter than no-undef anyway.
const eslintConfig = [
  // build output and non-source directories are not lintable
  // (wiki/ ships a vendored Obsidian plugin; docs/ dirs are prose archives)
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts", "gui-test-screenshots/**", ".worktrees/**", "wiki/**", "old documentation/**", "documented docs/**", "docs/**"] },
  js.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: "detect" } },
    plugins: {
      "@next/next": nextPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
    },
  },
];

export default eslintConfig;
