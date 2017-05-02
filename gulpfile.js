var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function(){
  return gulp.src([
  		'./public/scss/index.scss',
  		'./public/scss/home.scss'
  	])
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
});

gulp.task('default', ['css']);