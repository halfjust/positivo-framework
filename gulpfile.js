let gulp = require("gulp");

var run = require('gulp-run');
const path = require('path');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const debug = require("gulp-debug");
const minify = require('gulp-minify');



var paths = {

    assets: [
        'src/**/*.json',    //Json Files, data stored in json files, Configs in json , etc
        'src/**/*.html',    // Index, Templates , Etc
        'src/**/*.png',   // Copy static Css
        'src/**/*.svg',     // Svg Icons/ Svg Images
        'src/**/*.ico',     // Fav Icons
        'src/**/*.woff2',   // Fonts
        'src/**/*.woff',    // Fonts
        'src/**/*.ttf',     // Fonts,
        'system.config.js',

        //lazy modules,
        'src/**/*.js',

        //bundles
        // 'src/**/*.bundle.js'
    ],
    typescripts: ['src/**/*.ts', '!src/lib/**'],
    styles: ['src/**/*.scss'],
    dist: "./src",
    ElectronBuild: "E:/Core/CoreHost/Electron/",
};


// process Styles
function compileSass() {

    // You can use multiple globbing patterns as you would with `gulp.src`
    // concat and minify global scss files
    return gulp
        .src(paths.styles)
        .pipe(debug())
        // .pipe(sourcemaps.init())
        .pipe(sass({ errLogToConsole: true, onSuccess: (results) => console.log(results) }))
        //.pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist));
};

function serveDev() {
    return run("npm run serve").exec();
}
function watchSass() {
     gulp.watch(paths.styles, compileSass);
}


function dev() {

    compileSass();
    return gulp.parallel(watchSass, serveDev)();

}
exports.watchSass = watchSass;
exports.compileSass = compileSass;
exports['compile-sass'] = compileSass;
exports['serve-dev'] = serveDev;
exports['dev'] = dev;

