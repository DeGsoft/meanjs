var gulp = require('gulp'),
    useref = require('gulp-useref');

gulp.task('default', function () {
    var assets = useref.assets();

    return gulp.src('client/index.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});