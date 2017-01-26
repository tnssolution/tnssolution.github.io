module.exports = function(gulp, plugins, config){
  gulp.task('copyImage', ['copyLogo'], function(){
    console.log('Copy image is working...');
    gulp.src('./src/image/**/*.*')
        .pipe(gulp.dest('./image/'));
  });
  gulp.task('copyLogo', function(){
    console.log('Copy logo is loading...');
    gulp.src('./src/image/logo/*.*')
        .pipe(gulp.dest('./image/logo/'));
  });
}