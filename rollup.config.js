import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import htmlTemplate from 'rollup-plugin-generate-html-template'
// import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    // format: 'esm',
    sourcemap: true,
  },
  plugins: [
    // typescript({
    //   useTsconfigDeclarationDir: true,
    // }),
    nodeResolve({
      extensions: ['.js', 'jsx'],
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react', '@babel/preset-env'],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ['public'],
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'dist' }),
    htmlTemplate({
      template: 'public/index.html',
      target: 'index.html',
    }),
  ],
}
