/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    "rules": {
      // Note: you must disable the base rule as it can report incorrect errors
      
      "semi": "warn",
      "@typescript-eslint/semi": "warn",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "prefer-const": "warn"
    }
  };