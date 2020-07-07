import url from '@rollup/plugin-url';
import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/index.js',
  output: {
    name: 'VueNavigationBar',
    exports: 'named',
    globals: {
      'vue': 'Vue',
      'vue-screen-size': 'VueScreenSize',
      'tippy.js': 'tippy',
      'vue2-transitions': 'Vue2Transitions'
    }
  },
  plugins: [
    vue({
      css: false,
      compileTemplate: true,
    }),
    css({ output: 'dist/vue-navigation-bar.css' }),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    buble(),
    url()
  ],
  external: ['vue', 'vue-screen-size', 'tippy.js', 'vue2-transitions']
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(terser());

  // Here we remove our `external` dependency that we have in this project
  // Be careful with the index here - it has to match any dependency that
  // you want to be built into to the iife output
  config.external.splice(1)
  config.external.splice(1)
  config.external.splice(1)
}

export default config;
