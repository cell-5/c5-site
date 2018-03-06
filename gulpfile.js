var gulp      = require('gulp');
var connect   = require('gulp-connect');
var condition = require('gulp-if');
var imagemin  = require('gulp-imagemin');
var prefixer  = require('gulp-autoprefixer');
var minifyCss = require('gulp-clean-css');
var scss      = require('gulp-sass');
var uglify    = require('gulp-uglify');
var useref    = require('gulp-useref');

gulp.task('dev', function() {
    return connect.server({
        livereload: true,
        root: 'src',
        port: 8000
    });
});

gulp.task('production', function() {
    return connect.server({
        livereload: true,
        root: 'dist',
        port: 9000
    });
});

gulp.task('css', function() {
    return gulp.src('src/scss/app.scss')
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
    	.pipe(connect.reload());
});

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['src/scss/**/*.scss'], ['css']);
    gulp.watch(['src/*.html'], ['html']);
    gulp.watch(['src/js/*.js'], ['js']);
});

gulp.task('images', function() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('compile', function() {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(condition('*.js', uglify()))
        .pipe(condition('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css', 'dev', 'watch']);
gulp.task('build', ['compile', 'images', 'production']);
