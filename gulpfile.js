// load the plugins
//var gulp = require('gulp'),
//    minifyCSS = require('gulp-minify-css'),
//    sass = require('gulp-sass'),
//    rename = require('gulp-rename'),
//    jshint = require('gulp-jshint'),
//    uglify = require('gulp-uglify'),
//    concat = require('gulp-concat'),
//    ngAnnotate = require('gulp-ng-annotate')
//    nodemon = require('gulp-nodemon');

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    minifyCSS       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    autoprefixer    = require('gulp-autoprefixer'),
    sassdoc         = require('sassdoc');

// task variables
var sassinput = './public/assets/css/**/*.scss';
var sassoutput = './public/assets/css';
var sassdocOptions = {
    dest: './public/sassdoc'
};


// SASS file processing
gulp.task('sass', function() {
    return gulp.src(sassinput)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(sassoutput));
});

// SASSDOC processing
gulp.task('sassdoc', function() {
    return gulp
        .src(sassinput)
        .pipe(sassdoc(sassdocOptions))  
        .resume();
});

// gulp watch
gulp.task('watch', function() {
    gulp.watch(sassinput, ['sass']);
});








// define a task call css
gulp.task('css', function() {
    return gulp.src('public/assets/css/style.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/assets/css'));
});

// task for linting js files
gulp.task('js', function() {
    return gulp.src(['server.js', 'public/app/*.js', 'public/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// task to lint, minify, and concat frontend files
gulp.task('scripts', function() {
    return gulp.src(['public/assets/libs/angular/angular.min.js', 'public/assets/libs/angular-route/angular-route.min.js', 'public/assets/libs/angular-animate/angular-animate.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

// task to lint, minity, and concat frontend angular files
gulp.task('angular', function() {
    return gulp.src(['public/app/*.js', 'public/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('oldwatch', function() {
    gulp.watch('public/assets/css/style.less', ['css']);

    gulp.watch(['server.js', 'public/app/*.js', 'public/app/**/*.js'], ['js', 'angular']);
});

// the nodemon task
gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js',
        ext: 'js less html'
    })
        .on('start', ['watch'])
        .on('change', ['watch'])
        .on('restart', function() {
            console.log('Restarted!')
        });
});

// defining the main gulp task
gulp.task('default', ['nodemon']);
