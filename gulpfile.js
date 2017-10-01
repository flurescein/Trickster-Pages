const gulp    = require('gulp'),
      pug     = require('gulp-pug'),
      stylus  = require('gulp-stylus'),
      connect = require('gulp-connect')

gulp.task('connect', () => {
    connect.server({
        port: 8080,
        livereload: true,
        root: './dist'
    })
})

gulp.task('pug', () => {
    gulp.src('pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
})

gulp.task('stylus', () => {
    gulp.src('stylus/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})

gulp.task('watch', () => {
    gulp.watch('pug/*.pug', ['pug'])
    gulp.watch('stylus/*.styl', ['stylus'])
})

gulp.task('default', ['pug', 'stylus', 'connect', 'watch'])