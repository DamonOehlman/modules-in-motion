import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  plugins: [
    commonjs({
      namedExports: {
        'node_modules/lodash/lodash.js': [ 'difference' ]
      }
    }),
    resolve()
  ],
  entry: 'src/main.js',
  format: 'iife',
  dest: 'bundle.js'
};
