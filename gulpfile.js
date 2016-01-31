/////////////////////////////////////////////////////
// Gulp Dependencies
/////////////////////////////////////////////////////

var gulp = require("gulp"),
		autoprefixer = require("gulp-autoprefixer"),
		concat = require("gulp-concat"),
		jade = require('gulp-jade'),
		sass = require("gulp-sass"),
		uglify = require("gulp-uglify");

/////////////////////////////////////////////////////
// HTML
/////////////////////////////////////////////////////

gulp.task("jade", function() {
	gulp.src('docs/views/**/!(_)*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest("docs/views/build"));
});

/////////////////////////////////////////////////////
// SASS
/////////////////////////////////////////////////////

gulp.task('sass', function () {
	gulp.src('docs/css/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(function(file) {
		return file.base;
		 }));
});

/////////////////////////////////////////////////////
// JavaScript
/////////////////////////////////////////////////////

gulp.task("uglify", function() {
	gulp.src(["docs/javascript/**/*.js"])
		.pipe(concat("application.js"))
		.pipe(gulp.dest("docs/javascript/"))
});

/////////////////////////////////////////////////////
// Watch
/////////////////////////////////////////////////////

gulp.task("watch", function() {
	gulp.watch(['dist/**/*.sass', 'dist/**/*.scss', 'docs/css/**/*.sass', 'docs/css/**/*.scss'], ['sass']);
	gulp.watch(['docs/js/**/*.js'], ['uglify']);
	gulp.watch(['docs/views/**/*.jade'], ['jade']);
});

gulp.task("default", ["watch"], function() {

});