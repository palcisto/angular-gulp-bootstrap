(function() {
  var message  = '';
  var exitCode = 0;
  var supportedNodeVersion = 'v5.11.1';

  if (process.version >= supportedNodeVersion) {
    message = 'You are using the supported node version for this project. Continuing...';
  }
  else {
    message = 'You must use node v5.11.1 or higher while developing this project. Exiting...';
    exitCode = 1;
  }

  console.log(message);
  process.exit(exitCode);
})();
