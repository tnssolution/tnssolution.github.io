module.exports = function(gulp, plugins, config){

	gulp.task('clean', function(){
		console.log('Task clean is triggered!');
		return plugins(['./**/*', '!./src/**', '!./README.md', '!./.gitignore', '!./package.json', '!./gulpfile.js/**/*.*', '!./node_modules/**'], {dryRun: false, force: false})
			.then(paths => {
				console.log('Files and folders that would be deleted:\n', paths.join('\n'));
			});
	});
}