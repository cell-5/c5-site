var gulp      = require('gulp');
var connect   = require('gulp-connect');
var imagemin  = require('gulp-imagemin');
var prefixer  = require('gulp-autoprefixer');
var scss      = require('gulp-ruby-sass');

gulp.task('start', function() {
    connect.server({
        livereload: true,
        port: 8000
    });
});

gulp.task('css', function() {
    scss('scss/app.scss', {style: 'compressed'})
        .on('error', scss.logError)
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('*.html')
    	.pipe(connect.reload());
}
);

gulp.task('js', function() {
    gulp.src('js/*.js')
    	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['scss/**/*.scss'], ['css']);
    gulp.watch(['*.html'], ['html']);
    gulp.watch(['js/*.js'], ['js']);
});

gulp.task('images', function() {
    gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('default', ['css', 'start', 'watch']);
