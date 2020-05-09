import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: 'public/assets/app.js',
    format: 'iife',
    sourcemap: false,
    name: 'app'
  },
  plugins: [
    postcss({ extract: true }),
    vue({ css: false }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve(),
    esbuild({
      minify: production,
      target: 'es2015'
    }),
    commonjs(),
    !production && serve(),
    !production && livereload('public')
  ]
}

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
