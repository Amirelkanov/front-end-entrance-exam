import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: ['dist/**'],
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js, prettier },
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            ...js.configs.recommended.rules,
            'prettier/prettier': 'warn',
            'no-unused-vars': 'warn',
        },
    },
]);
