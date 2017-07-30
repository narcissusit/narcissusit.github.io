var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

gulp.task ('css', function() {
  return gulp.src('styles/*')
  	.pipe(sass())
    .pipe(gulp.dest('out/styles'))
    .pipe(browserSync.stream());
});
 
gulp.task('minifycss', function () {
    gulp.src('out/styles/*')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.stream());
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: ''
        },
        port: 8080
    });

    gulp.watch(["styles/*"], ['css']);
    gulp.watch(["out/styles/*"], ['minifycss']);
    gulp.watch("js/*").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);

});

gulp.task('default', ['server']);