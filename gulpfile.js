'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('clean', cb => {
  del(['lib']).then(() => {
    cb();
  });
});

gulp.task('css', () => {
  gulp.src('./src/**/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('lib/'));
});

gulp.task('js', () =>
  gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('lib/'))
);

gulp.task('publish', ['js','css']);
