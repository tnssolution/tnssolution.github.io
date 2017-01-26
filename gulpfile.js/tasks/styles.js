var merge = require('merge2');

module.exports = function(gulp, plugins, config){

	gulp.task('mergeCSS', ['copyFont'], function(){
		console.log("merge style combination task is triggered!");
		var sassStream = gulp.src(['src/sass/**/*.scss'])
			.pipe(plugins.plumber())
			.pipe(plugins.sass.sync().on('error',plugins.sass.logError))
			.pipe(plugins.concat('app_sass.css'));
		var lessStream = gulp.src(['src/less/**/*.less'])
			.pipe(plugins.plumber())
			.pipe(plugins.less())
			.pipe(plugins.concat('app_less.css'));
		var cssStream = gulp.src(['src/css/*.css', './css/*.css'])
			.pipe(plugins.plumber())
			.pipe(plugins.concat('app_css.css'));
		var cssSemanticUI = gulp.src(config.semantic_ui.semnatic_cssPath)
			.pipe(plugins.plumber())
			.pipe(plugins.concat('semantic_css.css'))
		var mergedStream = merge(cssSemanticUI, sassStream, lessStream, cssStream)
			.pipe(plugins.plumber())
			.pipe(plugins.concat('app.css'))
			.pipe(plugins.uglifycss({'maxLineLen': 10, 'uglyComments': true}))
			.pipe(gulp.dest('./css/'));
		return mergedStream;
	});
	gulp.task('copyFont', function(){
		console.log('copyFont task is activated...');
		gulp.src(config.semantic_ui.sourceFontPath)
			.pipe(gulp.dest(config.semantic_ui.destFontPath));
	});

}