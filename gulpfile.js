var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    sassJson = require('gulp-json-sass'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    transpile = require('gulp-es6-module-transpiler');

gulp.task('default', function() {

    gulp.src([
        'components/buttons.js'
        ])
        //.pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});

gulp.task('minSass', function() {
    gulp.src('styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS({
        keepBreaks: true
    }))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('styles'));
});

gulp.task('sass', function() {
    gulp.src(['JSON/global.json', 'global.scss'])
        .pipe(sassJson({
          sass: false
        }))
        .pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {

    gulp.watch([
        'components/buttons.js',
        'examples/js/examples.js'
    ], function() {
        gulp.start('default');
    });

    gulp.watch([
        'styles/global.scss',
        'styles/styles.scss'
    ], function() {
        try {
            gulp.start('sass');
        } catch(err) {
            console.log(err);
        } finally {
            gulp.start('minSass');
        }
    });
});
