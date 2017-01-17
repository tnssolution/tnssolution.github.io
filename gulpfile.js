var gulp = require('gulp'),
	file = require('gulp-file');

gulp.task('one', function(){
	console.log('Task one is triggered!');
});

gulp.task('two', function(){
	console.log('Task two is triggered!');
});

gulp.task('setup', function(){
	console.log("Setup is actived !");
});
gulp.task('default', ['one', 'two'], function(){
	console.log('Gulp Default Task is triggerd !');
});