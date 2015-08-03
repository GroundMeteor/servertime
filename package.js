Package.describe({
  name: "ground:servertime",
  version: "0.0.3",
  summary: "Adds server time on the client",
  git: "https://github.com/GroundMeteor/servertime.git"
});

Package.onUse(function (api) {

  api.versionsFrom('1.0');

  // Make sure any storage adapters are loaded first
  api.use([
    //'ground:localstorage@0.1.7'
    'raix:localforage@1.2.4'
  ], 'client');

  api.export('ServerTime');

  api.addFiles('client.js', 'client');
  api.addFiles('server.js', 'server');
});

Package.onTest(function (api) {
  if (api.versionsFrom) {
    api.use('ground:servertime', ['client', 'server']);
  } else {
    api.use('ground-servertime', ['client', 'server']);
  }
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.addFiles('client.tests.js', 'client');
  api.addFiles('server.tests.js', 'server');

});
