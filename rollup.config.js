import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const name = 'ReactEditor.js';

export default [
  {
    input: 'src/index.ts',
    external: ['react'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
      {
        file: pkg.browser,
        format: 'umd',
        name,
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        plugins: [
          ['transform-react-remove-prop-types', { removeImport: true }],
        ],
      }),
      commonjs(),
    ],
  },
];
