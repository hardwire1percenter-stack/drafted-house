import next from 'eslint-config-next';

export default [
  ...next,
  // Add your custom rules here if needed (e.g., ignores)
  {
    ignores: ['.next/**', 'out/**'],
  },
];
