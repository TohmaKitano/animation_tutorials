'use strict';

/**
 * Install Plugins
 */
const { watch, series, task, gulp, src, dest, parallel } = require('gulp');
// 直列処理 -> series()
// 並列処理 -> parallel()

// browser
const BROWSER_SYNC                = require('browser-sync');
// scss
const GULP_PLUMBER                = require('gulp-plumber');
const GULP_NOTIFY                 = require('gulp-notify')
const GULP_SASS                   = require('gulp-sass')(require('sass'));
const GULP_POSTCSS                = require('gulp-postcss');
const AUTOPREFIXER                = require('autoprefixer');
const CSS_DECLARATION_SORTER      = require('css-declaration-sorter');
const GULP_SASS_BLOB              = require('gulp-sass-glob');
const GULP_GRUP_CSS_MEDIA_QUERIES = require('gulp-group-css-media-queries');
const GULP_MODE                   = require('gulp-mode')({
                                      modes: ['production', 'development'], // 本番 -> 'gulp --production'
                                      default: 'production',
                                      verbose: false,
                                    })
// js
const GULP_BABEL                  = require('gulp-babel');
const GULP_UGLIFY_ES              = require('gulp-uglify-es').default;
const GULP_SOURCEMAPS             = require('gulp-sourcemaps')
// webpack
const WEBPACK                     = require('webpack');
const WEBPACK_STREAM              = require('webpack-stream');
const webpackConfig               = require('./webpack.config');

/**
 * Path Settings
 */
 const GULP_PATHS = {
  ROOT_DIR: 'dist/',
  ALL_DIR:  'dist/**/*.index.html',
  SRC_SLIM: 'src/slim/**/*.slim',
  SRC_SASS: 'src/assets/scss/**/*.scss',
  SRC_JS:   'src/assets/js/**/*.js',
  // SRC_IMG:  'src/assets/img/**/*',
  OUT_SLIM: 'dist/',
  OUT_CSS:  'dist/assets/css',
  OUT_JS:   'dist/assets/js',
  // OUT_IMG:  'dist/assets/img',
};

/**
 * Browser-sync Task
 */
 const browserSyncAbility = () => {
  BROWSER_SYNC.init({
    server: { baseDir:GULP_PATHS.ROOT_DIR },
    port: 8080,
    reloadOnRestart: true,
    notify: false,
    // 動的サイト
    // files: ['./**/*.php'],
    // proxy: 'http://localsite.wp/',
  })
}

/**
 * Scss Task
 */
const compileScss = () => {
  const POSTCSS_PLUGINS = [
    AUTOPREFIXER({
    // browserlist -> package.json
    cascade: false,
    // grid: 'autoplace' // for IE11('-ms-')
    }),
    // CSS_DECLARATION_SORTER({ order: 'alphabetical' /* smacss, concentric-css */ })
  ]

  return src(GULP_PATHS.SRC_SASS, { sourcemaps: true  /* init */})
  .pipe(GULP_PLUMBER({ errorHandler: GULP_NOTIFY.onError('<%= error.message %>') }))
  .pipe(GULP_SASS_BLOB())
  .pipe(GULP_SASS({outputStyle: 'expanded'}))
  .pipe(GULP_POSTCSS(POSTCSS_PLUGINS))
  .pipe(GULP_MODE.production(GULP_GRUP_CSS_MEDIA_QUERIES()))
  .pipe(dest(GULP_PATHS.OUT_CSS, { sourcemaps: './maps' /* write */ }))
  .pipe(BROWSER_SYNC.stream());
}

/**
 * Javascript Task
 */
const compileJs = () => {
  return src(GULP_PATHS.SRC_JS)
  .pipe(GULP_SOURCEMAPS.init())
  .pipe(GULP_PLUMBER({ errorHandler: GULP_NOTIFY.onError('<%= error.message %>')}))
  .pipe(GULP_BABEL({ presets: ["@babel/preset-env"] }))
  .pipe(GULP_UGLIFY_ES())
  .pipe(GULP_SOURCEMAPS.write('./maps'))
  .pipe(dest(GULP_PATHS.OUT_JS))
  .pipe(BROWSER_SYNC.stream());
}

/**
 * Watch Static Files
 */
// const watchFiles = () => {
//   watch(GULP_PATHS.ROOT_DIR, browserSyncAbility);
//   watch(GULP_PATHS.SRC_SASS, compileSass);
//   watch(GULP_PATHS.SRC_JS, compileJs);
// }
const watchBrowserSync = () => watch(GULP_PATHS.ROOT_DIR, browserSyncAbility);
const watchSassFiles = () => watch(GULP_PATHS.SRC_SASS, compileScss);
const watchJsFiles = () => watch(GULP_PATHS.SRC_JS, compileJs);

/**
* Default Task
*/
const defaultTask = () => {
  // watchFiles();
  watchBrowserSync();
  watchSassFiles();
  watchJsFiles();
  compileScss();
  compileJs();
}
exports.default = defaultTask;
// $ npx gulp


/**
 * webpack Task
 */
 const bundleJs = () => {
  return WEBPACK_STREAM(webpackConfig, WEBPACK)
    .pipe(dest(GULP_PATHS.OUT_JS));
}
exports.bundle = bundleJs;
// $ npx gulp bundle