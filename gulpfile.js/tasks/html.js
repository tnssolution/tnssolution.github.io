module.exports = function(gulp, plugins, config){
	gulp.task('html', function(){
		console.log('Task html is triggered!');
		return gulp.src(['src/html/header.html', 'src/html/script.html', 'src/html/footer.html'])
				.pipe(plugins.concat('index.html'))
				.pipe(gulp.dest('./'));
	});
}