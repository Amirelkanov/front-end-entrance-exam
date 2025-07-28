import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-console': 'error', // Подсвечивает любые консоль логи ошибкой
      'prefer-const': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-var': 'error',
    },
  },
]);
