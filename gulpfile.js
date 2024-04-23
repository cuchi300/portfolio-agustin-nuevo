const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const purgecss = require('gulp-purgecss');
const terser = require('gulp-terser-js');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const imagemin = require('gulp-imagemin');
const webp =  require('gulp-webp');
const avif = require('gulp-avif');

function css() {
    return src('src/scss/app.scss')
        .pipe( sass() )
        .pipe(postcss([ cssnano() ]))
        .pipe( dest('build/css') )
}

function imagenes() {
    return src('src/img/**/*')
        .pipe( imagemin({optimizationLevel: 3}))
        .pipe( dest('build/img') )
}

function imagenWebp() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{jpg,png}')
        .pipe( webp(opciones))
        .pipe( dest('build/img') )
}
function imagenAvif() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{jpg,png}')
        .pipe( avif(opciones))
        .pipe( dest('build/img') )
}

function javascript() {
    return src('src/js/**/*.js')
        .pipe(terser())
        .pipe(dest('build/js'))
}

function cssbuild() {
    return src('build/css/app.css')
        .pipe( rename({
            suffix: '.min'
        }))
        .pipe( purgecss({
            content: ['index.html', 'src/js/scroll.js', 'src/js/app.js' ,'src/js/efectos.js', 'src/js/bootstrap.bundle.min.js'],
        }))
        .pipe( dest('build/css') )
}

function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
    watch('build/css/app.css', cssbuild);
}

exports.css = css;
exports.imagenes = imagenes;
exports.imagenWebp = imagenWebp;
exports.dev = dev;
exports.imagenAvif = imagenAvif;
exports.javascript = javascript;
exports.cssbuild = cssbuild;
exports.default = series(css, dev);