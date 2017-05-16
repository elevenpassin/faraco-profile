// Require the main gulp module
var gulp = require('gulp');

// Import gulp Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var pug = require('gulp-pug');

gulp.task('lint', function(){
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('pug', function(){
  return gulp.src('*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
})

gulp.task('sass', function(){
  return gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function(){
  return gulp.src('js/*.js')
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('*.pug', ['pug'])
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('default', ['lint', 'pug', 'sass', 'scripts', 'watch']);
