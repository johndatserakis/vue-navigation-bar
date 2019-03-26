// https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
import vue from 'rollup-plugin-vue';
import images from 'rollup-plugin-image-files';
import css from 'rollup-plugin-css-only'
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
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
        commonjs(),
        resolve({
            jsnext: true,
            main: true,
        }),
        vue({
            css: false,
            compileTemplate: true,
        }),
        css({ output: 'dist/vue-navigation-bar.css' }),
        buble(),
        images()
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
