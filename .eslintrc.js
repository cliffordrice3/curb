module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.base.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {},
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['packages/curb-ui/**/*.{ts,tsx,js,jsx}'],
      env: {
        browser: true
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    {
      files: ['packages/curb/**/*.{ts,tsx,js,jsx}', 'packages/curb-tasks/**/*.{ts,tsx,js,jsx}', 'packages/curb-cli/**/*.{ts,tsx,js,jsx}'],
      env: {
        node: true
      }
    }
  ]
}; 