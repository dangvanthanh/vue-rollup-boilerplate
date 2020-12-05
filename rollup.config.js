import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import cssnano from 'cssnano'
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH
const port = 8080

export default {
  input: 'src/main.js',
  output: {
    file: 'public/assets/app.js',
    format: 'iife',
    sourcemap: false,
    name: 'app',
  },
  plugins: [
    alias({
      entries: [{ find: '@', replacement: __dirname + '/src/' }],
    }),
    image(),
    postcss({ extract: true, plugins: production ? [cssnano()] : [] }),
    nodeResolve(),
    commonjs(),
    vue({ css: false }),
    replace({
      'process.env.NODE_ENV': '"production"',
    }),
    esbuild({
      minify: false,
      target: 'es2015',
    }),
    production && terser(),
    !production &&
      serve({
        open: true,
        contentBase: 'public',
        historyApiFallback: true,
        port,
      }),
    !production && livereload({ watch: 'public' }),
  ],
  watch: {
    clearScreen: true,
  },
}
