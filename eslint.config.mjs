// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";


// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Ensure the package name is correct
import pluginReact from "eslint-plugin-react";

export default {
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  env: {
    browser: true, // Set environment to browser
    es2021: true,
    node: true
  },
  extends: [
    ...pluginJs.configs.recommended,
    ...tseslint.configs.recommended, // Ensure you're accessing the right property
    ...pluginReact.configs.recommended // Ensure the correct structure for extending
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Your custom rules here
  }
};
