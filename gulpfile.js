var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('default', function() {
    browserSync.init({
        proxy: "http://siteleaf-jekyll.dev"
    });
    gulp.watch("build/index.html").on("change", reload);
});
