const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')

function sassCompile(cb) {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
    cb()
}

function watch() {
    gulp.watch('app/scss/**/*.scss', sassCompile)
    gulp.watch('app/js/es6/**/*.js', babel2)
}

function babel2(cb) {
    return gulp.src('app/js/es6/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('app/js/es5'))
    cb()
}

exports.babel2 = babel2
exports.watch = watch
exports.sass = sassCompile