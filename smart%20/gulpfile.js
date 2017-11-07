var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

var browserSync = require('browser-sync');

gulp.task ('css', function() {
  return gulp.src('css/*')
  	.pipe(sass())
    .pipe(concatCss("style.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('out'))
    .pipe(browserSync.stream());
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: ''
        },
        port: 8080
    });

    gulp.watch(["css/*"], ['css']);
    gulp.watch("*.html").on('change', browserSync.reload);

});

gulp.task('default', ['server']);