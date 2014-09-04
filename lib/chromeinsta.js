var chokidar = require('chokidar');
var exec = require('child_process').exec;

var chromeinsta = exports;

chromeinsta.start = function(url, dir, ignore) {
  console.log('watching:    ' + dir);
  console.log('refreshing:  ' + url);
  console.log('ignoring:    ' + ignore);
  console.log('');

  chokidar.watch(dir, { ignored: ignore, persistent: true })
    .on('all', function(event, dir) {
      console.log('refreshing, due to activity in: ' + dir);
      exec('chromix load ' + url);
    });
}