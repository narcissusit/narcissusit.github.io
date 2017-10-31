var gulp = require('gulp');
var less = require('gulp-less');

var browserSync = require('browser-sync');

gulp.task ('css', function() {
  return gulp.src('styles/*')
  	.pipe(less())
    .pipe(gulp.dest('styles'))
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
    gulp.watch("*.html").on('change', browserSync.reload);

});

gulp.task('default', ['server']);