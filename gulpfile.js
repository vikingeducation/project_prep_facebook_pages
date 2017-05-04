var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function(){
  return gulp.src([
  		'public/scss/index.scss',
  		'public/scss/home.scss',
  		'public/scss/friends.scss',
  		'public/scss/newsfeed.scss'
  	])
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
});

gulp.task('watch', function() {
	gulp.watch(['public/**/*.scss'], ['css'])
})

gulp.task('default', ['css', 'watch'], function() {
	console.log("Watching SCSS...")
});