
// chrome-watcher [directory] [target]
// directory defaults to current directory (.)
// [target] deaults to index.html, can also be a URL?

var chokidar = require('chokidar');
var exec = require('child_process').exec;

var watcher = chokidar.watch('.', { ignored: /node_modules|\.git/, persistent: true });

watcher.on('all', function(event, path) {
  exec('chromix load file:///home/gorbiz/code/agsweb/index.html');
  // XXX debug
  console.log(event, path);
});