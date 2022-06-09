module.exports = {
    "root": true,
    "env": {
        "node": true,
        "browser": true,
        "es2021": true
    },
    "parser": "vue/vue3-recommended",
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin: prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'generator-star-spacing': 'off',
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [2, 4, { 'SwitchCase': 1 }],
    }
}