var chokidar = require('chokidar');
var exec = require('child_process').exec;

var chromeinsta = exports;

chromeinsta.start = function(url, dir, ignore) {

  // CONSIDER include chromix from source (potentially a fork)
  // ...running the from here too
  // OR setup a supervisor daemon such as daemontools or supervisord for `chromix-server`


  function checkChromixResponse(err, stdout, stderr) {
    if (err) {
      console.error('Failed to communicate with chromix: "' + err + '"');
      console.log('Have you installed and started the server? Some ideas:');
      console.log('sudo npm install -g chromix');
      console.log('chromix-server');
      process.exit(1);
    }
  }

  // Hello chromix, are you there? Wanna talk?
  exec('chromix ping', checkChromixResponse);
  console.log('WATCHING:   ' + dir);
  console.log('REFRESHING: ' + url);
  console.log('IGNORING:   ' + ignore);
  console.log('');

  chokidar.watch(dir, { ignored: ignore, persistent: true })
    .on('all', function(event, dir) {
      console.log('Refreshing, due to activity in: ' + dir);
      exec('chromix load ' + url, checkChromixResponse);
    });  
}