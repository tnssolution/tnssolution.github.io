var gulp = require('gulp'),
	file = require('gulp-file'),
	concat = require('gulp-concat'),
	del = require('del');

gulp.task('js', function(){
	console.log('Task js is triggered!');
});

gulp.task('css', function(){
	console.log('Task css is triggered!');
});

gulp.task('html', function(){
	console.log('Task html is triggered!');
});

gulp.task('clean', function(){
	console.log('Task clean is triggered!');
});
gulp.task('default', ['clean', 'html', 'css', 'js'], function(){
	console.log('Gulp Default Task is triggerd !');
});