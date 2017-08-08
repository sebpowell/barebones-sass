/////////////////////////////////////////////////////
// Gulp Dependencies
/////////////////////////////////////////////////////

var gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	concat = require("gulp-concat"),
	data = require('gulp-data'),
	jade = require('gulp-jade'),
	sass = require("gulp-sass"),
	fs = require('fs');
	uglify = require("gulp-uglify");
	cleanCSS = require('gulp-clean-css');

/////////////////////////////////////////////////////
// HTML
/////////////////////////////////////////////////////

gulp.task("jade", function() {
	gulp.src('documentation/inc/views/**/!(_)*.jade')
	.pipe(jade({
		pretty: true,
		locals: {
			base: "docs/",
			image_base: "docs/images/",
			strapline: "A lightweight, modular SASS boilerplate to kickstart your next project.",
			repo: "https://github.com/sebpowell/barebones-sass"
		}
	}))
	.pipe(gulp.dest("./"));
});

/////////////////////////////////////////////////////
// SASS
/////////////////////////////////////////////////////

gulp.task('sass', function () {
	gulp.src(['documentation/inc/css/style.scss', 'documentation/inc/css/style-2.scss'])
		.pipe(sass({
			outputStyle: "compact",
		}).on('error', sass.logError))
		// .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(autoprefixer({browsers: ['last 2 versions'], remove: false}))
		.pipe(gulp.dest(function(file) {
			return file.base;
		}));
	});

/////////////////////////////////////////////////////
// JavaScript
/////////////////////////////////////////////////////

gulp.task("uglify", function() {
	gulp.src(["documentation/inc/javascript/vendor/*.js", "documentation/inc/javascript/components/*.js"])
	.pipe(concat("application.js"))
	.pipe(gulp.dest("documentation/inc/javascript/"));
});

/////////////////////////////////////////////////////
// Watch
/////////////////////////////////////////////////////

gulp.task("watch", function() {
	gulp.watch(['dist/**/*.sass', 'dist/**/*.scss', 'docs/css/**/*.sass', 'documentation/inc/css/**/*.scss', 'dist/packaged/**/*.scss', 'dist/configurable/**/*.scss'], ['sass']);
	gulp.watch(['documentation/inc/javascript/**/*.js'], ['uglify']);
	gulp.watch(['documentation/inc/views/**/*.jade', 'documentation/views/data.json'], ['jade']);
});

gulp.task("default", ["watch"], function() {

});
