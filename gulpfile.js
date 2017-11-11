const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');

gulp.task('server', () =>
  gulp.src(['src/**'])
  .pipe(babel({
    presets: ["es2015-node5"]
  }))
  .pipe(gulp.dest('dist'))
);

gulp.task('nodemon', ['server'], () =>
  nodemon({
    script: 'dist/server.js',
    exec: 'node --inspect=0.0.0.0:5858',
    watch: 'dist/**',
    stdout: true,
    delay: 2
  }));

gulp.task('watch', () => gulp.watch('src/**', ['server']));

gulp.task('default', ['nodemon', 'watch']);