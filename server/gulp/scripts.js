var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('js', function() {
  gulp.src(['ng/**/*.module.js', 'ng/**/*.service.js', 'ng/**/*.controller.js', 'ng/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(babel({presets:['es2015']}))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'));
});

gulp.task('watch:js', ['js'], function() {
  gulp.watch('ng/**/*.js', ['js']);
});
