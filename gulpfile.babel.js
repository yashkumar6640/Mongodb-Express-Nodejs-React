// var gulp = require('gulp');
import gulp from 'gulp';
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
})

gulp.task('bundle',['copy'], function(){
    return browserify({
        entries: 'app/main.jsx', 
        debug: true,

    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.temp'))
})

gulp.task('copy', function(){
    gulp.src(['app/*.css'])
    .pipe(gulp.dest('./.temp'));
})
gulp.task('serve', ['bundle','live-server'], function(){
    browserSync.init(null, {
        proxy: "http://localhost:7777",
        port: 9001
    })
})

// gulp.task('watch', function(){
//     gulp.src( ['./app/**/*.jsx'])
//     gulp.run('serve')
// })
//  gulp.watch(['./app/**/*.jsx'], function() {
//     gulp.run('serve')
//   })