'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync= require('browser-sync');
    

    gulp.task ('sass', () => {
      return gulp.src('css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
    });
    
    gulp.task('browser-sync', function () {
        var files = [
           './*.html',
           './css/*.css',
           './img/*.{png,jpg,gif}',
           './js/*.js'
        ];
     
        browserSync.init(files, {
           server: {
              baseDir: "./"
           }
        });
       
        
     
     });
     gulp.task('watch', () => {
      gulp.watch('css/**/*.scss', gulp.series('sass'));
    


  });
     
     // Default task
     gulp.task('default', gulp.series('sass', 'browser-sync'));

    