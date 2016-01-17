var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var url = require('url');
// var proxy = require('proxy-middleware');

gulp.task('server', function() {
  // var proxyOptions = url.parse('https://space-engine.herokuapp.com');
  // proxyOptions.route = '/proxy';

  browserSync.init({
    open: true,
    server: {
      baseDir: "./"
      // ,middleware: [proxy(proxyOptions)]
    }
  });
});
