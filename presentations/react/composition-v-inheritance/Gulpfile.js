var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./js/*.js'], ['html']);
  gulp.watch(['./css/*.css'], ['html']);
});

gulp.task('default', ['connect', 'watch']);