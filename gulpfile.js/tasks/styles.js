module.exports = function(gulp, plugins, config){


gulp.task('mergeCSS', function(){
	console.log("merge style combination task is triggered!");
	var sassStream = gulp.src(['src/sass/**/*.scss'])
		.pipe(plumber())
		.pipe(sass.sync().on('error',sass.logError))
		.pipe(concat('app_sass.css'));
	var lessStream = gulp.src(['src/less/**/*.less'])
		.pipe(plumber())
		.pipe(less())
		.pipe(concat('app_less.css'));
	var cssStream = gulp.src(['src/css/*.css', './css/*.css'])
		.pipe(plumber())
		.pipe(concat('app_css.css'));
	var mergedStream = merge(cssStream, sassStream, lessStream)
		.pipe(plumber())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./css/'));
	return mergedStream;
});

}