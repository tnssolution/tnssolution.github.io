module.exports = function(gulp, plugins, config){


gulp.task('mergeJS', function(){
	console.log('Task mergeJS is triggered!');
	var coffeeScriptStream = gulp.src(['src/coffee/**/*.coffee'])
		.pipe(plumber())
		.pipe(coffee())
		.pipe(concat('app_coffee.js'));
	var jsStream = gulp.src(['src/js/**/*.js'])
		.pipe(plumber())
		.pipe(concat('app_js.js'));
	
	var mergeJS = merge(coffeeScriptStream, jsStream)
		.pipe(plumber())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./js/'));
	return mergeJS;
});

}