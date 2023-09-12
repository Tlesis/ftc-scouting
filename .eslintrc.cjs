module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: ["svelte3", "@typescript-eslint"],
    ignorePatterns: ["*.cjs"],
    overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
    settings: {
        "svelte3/typescript": () => require("typescript")
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        "indent": ["error", 4, { "SwitchCase": 4 }],
        "arrow-spacing": ["error", { before: true, after: true }],
        "arrow-parens": ["error", "always"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": "error",
        "no-trailing-spaces": "error"
    }
};
