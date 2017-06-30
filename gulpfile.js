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
	gulp.src('docs/views/**/!(_)*.jade')
	.pipe(jade({
		pretty: true,
		locals: {
			data: JSON.parse(fs.readFileSync('docs/views/data.json')),
			base: "docs/",
			image_base: "docs/images/",
			strapline: "A lightweight, modular SASS boilerplate to kickstart your next web project.",
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
	gulp.src(["docs/javascript/vendor/*.js", "docs/javascript/components/*.js"])
	.pipe(concat("application.js"))
	.pipe(gulp.dest("docs/javascript/"));
});

/////////////////////////////////////////////////////
// Watch
/////////////////////////////////////////////////////

gulp.task("watch", function() {
	gulp.watch(['dist/**/*.sass', 'dist/**/*.scss', 'docs/css/**/*.sass', 'documentation/inc/css/**/*.scss', 'dist/packaged/**/*.scss', 'dist/configurable/**/*.scss'], ['sass']);
	gulp.watch(['docs/javascript/**/*.js'], ['uglify']);
	gulp.watch(['docs/views/**/*.jade', 'docs/views/data.json'], ['jade']);
});

gulp.task("default", ["watch"], function() {

});
