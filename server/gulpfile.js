var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp')
  .forEach(task => require('./gulp/' + task));

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server']);