var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
//  var bsrt = require('browser-sync-reuse-tab')(browserSync);

gulp.task('watch', function () {
  // browserSync will make a small webserver, and needs to know where to point
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
  watch('./app/index.html', function () {
    browserSync.reload();
  });

  // watch for changes to ANY future css files inside the /styles/ folder
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  });
});

// middle param is the "dependencies task" that must complete before this task runs.
gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
