var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function () {
  // notice the pipes here
  return gulp.src('./app/assets/styles/styles.css')
    // Postcss filters. Order matters here!
    .pipe(postcss([cssimport, mixins, nested, cssvars, hexrgba, autoprefixer])) // want to run the contents of src into PostCSS
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles')); // and then send to destination
});
