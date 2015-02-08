var gulp = require('gulp'),

    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps');

var vendscriptsources = [
  './bower_components/jquery/dist/jquery.js',
  './bower_components/bootstrap/dist/bootstrap.js',
  './bower_components/underscore/underscore.js',
  './bower_components/backbone/backbone.js',
  './bower_components/marionette/lib/backbone.marionette.js'
];

gulp.task('vendorscriptsconcat', function() {
// Processes all Vendor scripts and concatenate to one JS file for front-end
  return gulp.src(vendscriptsources)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(rename('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
});

gulp.task('scriptscoffee', function() {
// Process all Coffeescript and concat to single javascript file
  return gulp.src('./front_components/coffeescript/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(concat('primary.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(rename('primary.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
});

gulp.task('cssless', function() {
// Process and Concatenate from LESS to CSS
  return gulp.src('./front_components/less/*')
    .pipe(less())
    .pipe(gulp.dest('./public/css/components'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(rename('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))

});

gulp.task('default', ['vendorscriptsconcat', 'scriptscoffee', 'cssless']);
