import resolve from 'rollup-plugin-node-resolve';

export default {
  plugins: [
    resolve()
  ],
  entry: 'src/main.js',
  format: 'iife',
  dest: 'bundle.js'
};
