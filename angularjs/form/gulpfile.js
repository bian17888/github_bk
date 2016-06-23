var gulp = require('gulp');
var connect = require('gulp-connect'); 

gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 3200,
        livereload: true
    });
});

gulp.task('modify', function(){
	gulp
		.src('./app/**/*')
		.pipe(connect.reload())
})

gulp.task('watch', function () {
    gulp.watch(['./app/**/*'], ['modify'])
});

gulp.task('default', ['connect', 'watch']);