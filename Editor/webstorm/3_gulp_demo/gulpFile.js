/**
 * Created by biankai on 15/2/7.
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', function(){



	return gulp.src("./js/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})