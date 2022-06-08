const { src, dest, task, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const plumber = require('gulp-plumber');
const purgecss = require('gulp-purgecss');

const runSequence = require('run-sequence');

const del = require('del');

// To compile scss to css
task('scss', (cb) => {
  src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer('last 2 versions'))
    .pipe(dest('src/css'));
  cb();
});

// To minify css and js files
task('minify', (cb) => {
  src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // .pipe(gulpIf('*.css', purgecss({ content: ['src/**/*.html'] })))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(dest('dist'));
  cb();
});

// To optimize images
task('optimize', (cb) => {
  src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({ interlaced: true })))
    .pipe(dest('dist/images'));
  cb();
});

task('move-files', (cb) => {
  src('src/favicons/*').pipe(dest('dist/favicons'));
  src('src/site.webmanifest').pipe(dest('dist'));
  src('src/student-downloads/build/**/*').pipe(dest('dist/student-downloads'));
  cb();
});

task('clean:dist', (cb) => {
  del.sync('dist');
  cb();
});

task('watch', () => watch('src/scss/**/*.scss', series(['scss'])));

task(
  'build',
  series('clean:dist', ['scss', 'minify', 'move-files', 'optimize'])
);

task('default', series(['scss', 'watch']));
