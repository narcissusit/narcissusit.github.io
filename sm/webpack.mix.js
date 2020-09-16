const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 
mix
	.options({
        processCssUrls: false,
    })
    .sass('src/scss/style.scss', 'dist/css')
    .js('src/js/script.js', 'dist/js')
    .browserSync({
        proxy: 'sm.loc',
        files: ["dist/css", "dist/js", "*.php", "inc"]
    });