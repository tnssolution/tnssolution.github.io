var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	runSequence = require('run-sequence'),
	config = require('../../gulpconfig');

require('./styles')(gulp, plugins, config);
require('./image')(gulp, plugins, config);
require('./scripts')(gulp, plugins, config);
require('./html')(gulp, plugins, config);
require('./browsersync')(gulp, plugins, config);
require('./clean')(gulp, plugins, config);
require('./watch')(gulp, plugins, config);

gulp.task('default', function(cb){
	console.log('Gulp Default Task is triggerd !');
	runSequence('clean',['mergeCSS', 'copyImage', 'mergeJS','html'],cb);
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





// gulp.task('html', function(){
// 	console.log('Task html is triggered!');
// 	return gulp.src(['src/html/header.html', 'src/html/script.html', 'src/html/footer.html'])
// 			.pipe(concat('index.html'))
// 			.pipe(gulp.dest('./'));
// });



// gulp.task('default', function(cb){
// 	console.log('Gulp Default Task is triggerd !');
// 	// runSequence('clean',['mergeCSS', 'mergeJS','html'],cb);
// });


}