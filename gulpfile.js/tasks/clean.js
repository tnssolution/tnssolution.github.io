module.exports = function(gulp, plugins, config){

	gulp.task('clean', function(){
		console.log('Task clean is triggered!');
		return gulp.src(config.cleanFiles).pipe(plugins.clean({force: false}));
	});
}