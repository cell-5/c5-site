var gulp      = require('gulp');
var connect   = require('gulp-connect');
var condition = require('gulp-if');
var imagemin  = require('gulp-imagemin');
var prefixer  = require('gulp-autoprefixer');
var minifyCss = require('gulp-clean-css');
var scss      = require('gulp-sass');
var uglify    = require('gulp-uglify');
var useref    = require('gulp-useref');
var del       = require('del');
var cacheBust = require('gulp-cache-bust');
var Bust      = require('gulp-bust');
var bust      = new Bust();

gulp.task('dev', function() {
    return connect.server({
        livereload: true,
        root: 'src',
        host: '0.0.0.0',
        port: 8000
    });
});

gulp.task('production', function() {
    return connect.server({
        livereload: true,
        root: 'build',
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
    gulp.watch(['src/img/**/*'], ['images']);
    gulp.watch(['src/js/*.js'], ['js']);
});

gulp.task('images', function() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(bust.resources())
        .pipe(gulp.dest('build/img'));
});

gulp.task('fa:webfonts', function() {
    return gulp.src('src/vendor/fontawesome/web-fonts-with-css/webfonts/**/*')
        .pipe(gulp.dest('build/webfonts'));
});

gulp.task('slick:fonts', function() {
    return gulp.src('src/vendor/slick-carousel/slick/fonts/**/*')
        .pipe(gulp.dest('build/css/fonts'));
});

gulp.task('slick:ajaxloader', function() {
    return gulp.src('src/vendor/slick-carousel/slick/ajax-loader.gif')
        .pipe(gulp.dest('build/css'));
});

gulp.task('slick', ['slick:fonts', 'slick:ajaxloader']);

gulp.task('favicon', function() {
    return gulp.src('src/favicon.ico')
        .pipe(bust.resources())
        .pipe(gulp.dest('build'));
});

gulp.task('seo', function() {
    return gulp.src([
        'src/BingSiteAuth.xml', 
        'src/google048e4cb97d286796.html',
        'src/robots.txt',
        'src/sitemap.xml'
    ]).pipe(gulp.dest('build'));
});

gulp.task('cacheBust:js', function() {
    return gulp.src('build/js/*.js')
        .pipe(bust.resources())
        .pipe(gulp.dest('build/js'));
});

gulp.task('cacheBust:css', function() {
    return gulp.src('build/css/*.css')
        .pipe(bust.resources())
        .pipe(gulp.dest('build/css'));
});

gulp.task('cacheBust:html', function() {
    return gulp.src('build/*.html')
        .pipe(bust.references())
        .pipe(gulp.dest('build'));
});

gulp.task('cacheBust', ['cacheBust:js', 'cacheBust:css'], function() {
    return gulp.start('cacheBust:html');
});

gulp.task('compile', function() {
    return gulp.start('css', function() {
        return gulp.src('src/*.html')
            .pipe(useref())
            .pipe(condition('*.js', uglify()))
            .pipe(condition('*.css', minifyCss()))
            .pipe(bust.references())
            .pipe(gulp.dest('build'));
    });
});

gulp.task('clean', function() {
    return del([
        'src/css',
        'src/vendor',
        'build/css/all.css',
        'build/js/all.js'
    ]);
});

gulp.task('default', ['css', 'dev', 'watch']);
gulp.task('build', ['images', 'fa:webfonts', 'slick', 'favicon', 'seo'], function() {
    return gulp.start('compile');
});
// gulp.task('build', ['compile', 'images', 'production']);
