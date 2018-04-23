var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssimport = require('postcss-import'),
  livereload = require('gulp-livereload'),
  less = require('gulp-less')

gulp.task('default', function () {
  console.log('Running default task...')
})
gulp.task('myHtmlTask', function () {
  console.log('Running myHtmlTask...')
})
gulp.task('cssTask', function () {

  // notice the pipes here
  return gulp.src('./app/assets/styles/styles.css')
    // order matters here!
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer])) // want to run the contents of src into PostCSS
    .pipe(gulp.dest('./app/temp/styles')) // and then send to destination
})
/*
gulp.task('less', function () {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload())
})
*/
gulp.task('watch', function () {
  // live reload call
  //livereload.listen()
  //gulp.watch('less/*.less', ['less'])
  // watch for index.html file changes, fires on save.
  watch('./app/index.html', function () {
    gulp.start('myHtmlTask')
  })

  // watch for changes to ANY future css files inside the /styles/ folder
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssTask')
  })
})
