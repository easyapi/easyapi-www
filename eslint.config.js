// @ts-check
import antfu from '@antfu/eslint-config'

export default await antfu(
  {
    ignores: [
      '.vscode',
      '.output',
      'dist',
      'node_modules',
      'public',
    ],
  },
  {
    rules: {
      'brace-style': 'off',
      '@typescript-eslint/brace-style': 'off',
      'no-console': 'off',
      'curly': 'off',
    },
  },
)
