var gulp = require('gulp'),
	plugins = require('gulp-load-plugins');
	config = require('../../gulpconfig');
	del = require('del');

require('./scripts')(gulp, plugins, config);
require('./clean')(gulp, del, config);

gulp.task('default', function(){
	console.log("Default task is actived! ");
	console.log(plugins);
});



module.exports = function(gulp, plugins, config){




// var gulp = require('gulp'),
// 	concat = require('gulp-concat'),
// 	inject = require('gulp-inject'),
// 	sass = require('gulp-sass'),
// 	less = require('gulp-less'),
// 	coffee = require('gulp-coffee'),
// 	plumber = require('gulp-plumber'),
// 	merge = require('merge-stream'),
// 	browserSync = require('browser-sync'),
// 	runSequence = require('run-sequence'),
// 	del = require('del');





gulp.task('html', function(){
	console.log('Task html is triggered!');
	return gulp.src(['src/html/header.html', 'src/html/script.html', 'src/html/footer.html'])
			.pipe(concat('index.html'))
			.pipe(gulp.dest('./'));
});



gulp.task('default', function(cb){
	console.log('Gulp Default Task is triggerd !');
	// runSequence('clean',['mergeCSS', 'mergeJS','html'],cb);
});


}