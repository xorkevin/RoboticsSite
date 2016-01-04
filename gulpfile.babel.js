//IMPORTS//
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';

//PATHS//
const PATH = {
  HTML: 'app/index.html',
  ALL: ['app/js/*.js', 'app/js/**/*.js', 'app/index.html'],
  JS: 'app/js/main.js',
  MINIFIED_OUT: 'build.min.js',
  DEST: 'dist'
};

//TASKS//
gulp.task('build-js', ()=>{
  browserify({
    entries: PATH.JS,
    debug: true
  })
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(PATH.DEST));
});

gulp.task('build-html', ()=>{
  gulp.src(PATH.HTML)
    .pipe(gulp.dest(PATH.DEST));
});

gulp.task('build', ['build-html', 'build-js']);
