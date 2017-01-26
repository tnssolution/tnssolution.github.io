var merge = require('merge2');

module.exports = function(gulp, plugins, config){

gulp.task('mergeJS', function(cb){
	console.log('Task mergeJS is triggered!');

	var jsJQuery = gulp.src(config.jqueryPath)
		.pipe(plugins.plumber())
		.pipe(plugins.concat('jquery_js.js'));

	var jsSemanticUI = gulp.src(config.semantic_ui.semantic_jsPath)
		.pipe(plugins.plumber())
		.pipe(plugins.concat('semantic_js.js'));
	
	var coffeeScriptStream = gulp.src(['src/coffee/**/*.coffee'])
		.pipe(plugins.plumber())
		.pipe(plugins.coffee())
		.pipe(plugins.concat('app_coffee.js'));
	
	var jsStream = gulp.src(['src/js/**/*.js'])
		.pipe(plugins.plumber())
		.pipe(plugins.concat('app_js.js'));

	var mergeJS = merge(jsJQuery, jsSemanticUI, coffeeScriptStream, jsStream)
		.pipe(plugins.plumber())
		.pipe(plugins.concat('app.js'))
		// .pipe(plugins.uglify())
		.pipe(gulp.dest('./js/'));
	return mergeJS;
});

}