//IMPORTS//
import gulp from 'gulp';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import watchify from 'watchify';
import browserify from 'browserify';

import bsync from 'browser-sync';

import uglify from 'gulp-uglify';


//PATHS//
const PATH = {
  HTML: 'app/*.html',
  ALL: ['app/js/*.jsx', 'app/js/**/*.jsx', 'app/index.html'],
  JS: 'app/js/main.jsx',
  JSDIR: 'app/js',
  MINIFIED_OUT: 'build.min.js',
  DEST: 'dist',
  BUNDLE: 'bundle.js'
};


//constants//
let browserSync = bsync.create()

let bundlejs = ()=>{
  return jsbundler.bundle()
    .on("error", function(err){
      gutil.log(err.toString());
      this.emit('end');
    })
    .pipe(source(PATH.BUNDLE))
    // .pipe(uglify()) not compatible with streams
    .pipe(gulp.dest(PATH.DEST))
    .pipe(browserSync.stream({once: true}));
};

let jsbundler = watchify(browserify(PATH.JS, watchify.args));
jsbundler.transform(babelify, {presets: ["es2015", "react"]});
jsbundler.on('update', bundlejs);


//TASKS//
gulp.task('build-js', ()=>{
  return bundlejs();
});

gulp.task('build-html', ()=>{
  gulp.src(PATH.HTML)
    .pipe(gulp.dest(PATH.DEST))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['build-html', 'build-js']);

gulp.task('browser-sync', ()=>{
    browserSync.init({
        server: {
            baseDir: PATH.DEST
        }
    });

    gulp.watch(PATH.HTML, ['build-html']);
});


gulp.task('serve', ['build', 'browser-sync']);

gulp.task('default', ['serve']);
