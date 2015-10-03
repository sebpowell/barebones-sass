// Load Gulp Dependencies
var gulp = require("gulp"),
		sass = require("gulp-ruby-sass");
		// autoprefixer = require("gulp-autoprefixer"),
		uglify = require("gulp-uglify"),
		concat = require("gulp-concat"),
		// notify = require("gulp-notify");

gulp.task('sass', function () {
	return sass('css/style.scss', { style: 'compact' })
	.on('error', function (err) {
		console.error('Error!', err.message);
	})
	.pipe(gulp.dest('css'));	
});

gulp.task("uglify", function() {

	gulp.src(["js/*.js"])
		.pipe(concat("app.js"))
		.pipe(gulp.dest(""))
});


gulp.task("watch", function() {
	gulp.watch(['**/*/*.sass', '**/*/*.scss'], ['sass']);
	gulp.watch(['js/*.js'], ['uglify']);
});

gulp.task("default", function() {

});