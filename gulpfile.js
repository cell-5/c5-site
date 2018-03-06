var gulp      = require('gulp');
var connect   = require('gulp-connect');
var imagemin  = require('gulp-imagemin');
var prefixer  = require('gulp-autoprefixer');
var scss      = require('gulp-sass');

gulp.task('start', function() {
    return connect.server({
        livereload: true,
        root: 'dist',
        port: 8000
    });
});

gulp.task('css', function() {
    return gulp.src('src/scss/app.scss')
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
    	.pipe(connect.reload());
});

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'))
    	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['src/scss/**/*.scss'], ['css']);
    gulp.watch(['src/*.html'], ['html']);
    gulp.watch(['src/js/*.js'], ['js']);
});

gulp.task('images', function() {
    return gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('default', ['html', 'js', 'css', 'start', 'watch']);
