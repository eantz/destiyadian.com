var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpConcatCss = require('gulp-concat-css');
var gulpCleanCss = require('gulp-clean-css');
var gulpMinify = require('gulp-minify');
var gulpRev = require('gulp-rev');
var gulpRevReplace = require('gulp-rev-replace');
var del = require('del');

var sanitizeCssSrc = 'node_modules/sanitize.css/sanitize.css';
var sweetalertCssSrc = 'node_modules/sweetalert2/dist/sweetalert2.css';
var mainCssSrc = 'assets/src/css/main.css';

var sweetalertJsSrc = 'node_modules/sweetalert2/dist/sweetalert2.js';
var mainJsSrc = 'assets/src/js/main.js';

var options = {
    buildDirCSS : 'assets/build/css',
    buildDirJS : 'assets/build/js',
    distAssets : 'dist/assets',
    distHTML : 'dist'
}

gulp.task('clean-css', function() {
    return del([
        options.buildDirCSS,
    ]);
});

gulp.task('clean-js', function() {
    return del([
        options.buildDirCSS,
    ]);
});

gulp.task('bundle-css', ['clean-css'], function() {
    return gulp.src([sanitizeCssSrc, sweetalertCssSrc, mainCssSrc], {base: 'assets/build'})
                .pipe(gulpConcatCss('bundle.css'))
                .pipe(gulpCleanCss())
                .pipe(gulpRev())
                .pipe(gulp.dest(options.buildDirCSS))
                .pipe(gulpRev.manifest('assets/build/rev-manifest.json', {
                    merge: true,
                    base: 'assets/build',
                    path: 'assets/build/rev-manifest.json'
                }))
                .pipe(gulp.dest('assets/build'));
});

gulp.task('bundle-js', ['clean-js'], function() {
    return gulp.src([sweetalertJsSrc, mainJsSrc], {base: 'assets/build'})
                .pipe(gulpConcat('bundle.js'))
                .pipe(gulpMinify({
                    ext: {
                        min: '.js'
                    },
                    noSource: true
                }))
                .pipe(gulpRev())
                .pipe(gulp.dest(options.buildDirJS))
                .pipe(gulpRev.manifest('assets/build/rev-manifest.json', {
                    merge: true,
                    base: 'assets/build',
                    path: 'assets/build/rev-manifest.json'
                }))
                .pipe(gulp.dest('assets/build'));
});

// gulp.task('revision', ['bundle-css', 'bundle-js', 'clean-revision'], function() {
//     return gulp.src(['assets/build/css/*.css', 'assets/build/js/*.js'])
//                 .pipe(gulpRev())
//                 .pipe(gulp.dest(options.distAssets))
//                 .pipe(gulpRev.manifest())
//                 .pipe(gulp.dest(options.distAssets));
// });

gulp.task("revReplace", ['bundle-css', 'bundle-js'], function(){
    var manifest = gulp.src("assets/build/rev-manifest.json");
  
    return gulp.src("template/*.html")
      .pipe(gulpRevReplace({manifest: manifest}))
      .pipe(gulp.dest(''));
});


gulp.task('default', ['revReplace']);