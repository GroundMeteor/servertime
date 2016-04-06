Package.describe({
  name: "ground:servertime",
  version: "2.0.0",
  summary: "Adds server time on the client",
  git: "https://github.com/GroundMeteor/servertime.git"
});

Npm.depends({
  localforage: '1.4.0',
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3');
  api.use(['ecmascript']);

  api.export('ServerTime');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});

Package.onTest(function (api) {
  api.use('ground:servertime', ['client', 'server']);
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.addFiles('client.tests.js', 'client');
  api.addFiles('server.tests.js', 'server');

});
