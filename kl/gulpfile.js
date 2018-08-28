var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


gulp.task ('css', function() {
  return gulp.src('src/styles/*')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
    .pipe(gulp.dest("dist/css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  gulp.src('src/lib/*.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        port: 3000
    });
});

gulp.task('default', ['css', 'server'], function () {
    gulp.watch(['src/styles/*', 'dist/css/*'], ['css'])
    gulp.watch(['src/lib/*'], ['js'])
    gulp.watch(['*.html'], ['bs-reload']);
});