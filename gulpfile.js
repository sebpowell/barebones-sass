/////////////////////////////////////////////////////
// Gulp Dependencies
/////////////////////////////////////////////////////

var gulp = require("gulp"),
		autoprefixer = require("gulp-autoprefixer"),
		concat = require("gulp-concat"),
		jade = require('gulp-jade'),
		sass = require("gulp-ruby-sass"),
		uglify = require("gulp-uglify");

/////////////////////////////////////////////////////
// HTML
/////////////////////////////////////////////////////

gulp.task("jade", function() {
	gulp.src('views/**/!(_)*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest("views/build"));
});

/////////////////////////////////////////////////////
// SASS
/////////////////////////////////////////////////////

gulp.task('sass', function () {
	return sass('assets/css/style.scss', { style: 'compact' })
	.on('error', function (err) {
		console.error('Error!', err.message);
	})
	// .pipe(autoprefixer("last 2 version", "> 1%"))
	.pipe(gulp.dest(function(file) {
		return file.base;
	 }));
});

/////////////////////////////////////////////////////
// JavaScript
/////////////////////////////////////////////////////

gulp.task("uglify", function() {
	gulp.src(["assets/js/**/*.js"])
		.pipe(concat("application.js"))
		.pipe(gulp.dest("assets/js"))
});

/////////////////////////////////////////////////////
// Watch
/////////////////////////////////////////////////////

gulp.task("watch", function() {
	gulp.watch(['dist/css/**/*.sass', 'dist/css/**/*.scss', 'assets/css/**/*.sass', 'assets/css/**/*.scss'], ['sass']);
	gulp.watch(['dist/js/**/*.js'], ['uglify']);
	gulp.watch(['views/**/*.jade'], ['jade']);
});

gulp.task("default", ["watch"], function() {

});