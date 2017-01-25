var gulp = require('gulp'),
	concat = require('gulp-concat'),
	inject = require('gulp-inject'),
	sass = require('gulp-sass'),
	less = require('gulp-less'),
	coffee = require('gulp-coffee'),
	plumber = require('gulp-plumber'),
	merge = require('merge-stream'),
	browserSync = require('browser-sync'),
	runSequence = require('run-sequence'),
	del = require('del');

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

gulp.task('mergeCSS', function(){
	console.log("merge style combination task is triggered!");
	var sassStream = gulp.src(['src/sass/**/*.scss'])
		.pipe(plumber())
		.pipe(sass.sync().on('error',sass.logError))
		.pipe(concat('app_sass.css'));
	var lessStream = gulp.src(['src/less/**/*.less'])
		.pipe(plumber())
		.pipe(less())
		.pipe(concat('app_less.css'));
	var cssStream = gulp.src(['src/css/*.css', './css/*.css'])
		.pipe(plumber())
		.pipe(concat('app_css.css'));
	var mergedStream = merge(cssStream, sassStream, lessStream)
		.pipe(plumber())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./css/'));
	return mergedStream;
});

gulp.task('html', function(){
	console.log('Task html is triggered!');
	return gulp.src(['src/html/header.html', 'src/html/script.html', 'src/html/footer.html'])
			.pipe(concat('index.html'))
			.pipe(gulp.dest('./'));
});

gulp.task('clean', function(){
	console.log('Task clean is triggered!');
	return del(['./**/*', '!./src/**', '!./README.md', '!./.gitignore', '!./package.json', '!./gulpfile.js', '!./node_modules/**'], {dryRun: false, force: false})
		.then(paths => {
			console.log('Files and folders that would be deleted:\n', paths.join('\n'));
		});
});

gulp.task('default', function(cb){
	console.log('Gulp Default Task is triggerd !');
	runSequence('clean',['mergeCSS', 'mergeJS','html'],cb);
});