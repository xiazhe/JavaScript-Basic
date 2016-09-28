var gulp = require('gulp'),
    less = require('gulp-less');


// LESS compile
gulp.task('less', function () {

    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});