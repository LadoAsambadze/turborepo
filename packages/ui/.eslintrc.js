module.exports = {
    root: true,
    extends: ['@repo/eslint-config/react-internal.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.lint.json', './tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
    },
}
