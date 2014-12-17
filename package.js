Package.describe({
  name: "ground:servertime",
  version: "0.0.1",
  summary: "Adds server time on the client",
  git: "https://github.com/GroundMeteor/servertime.git"  
});

Package.onUse(function (api) {

  if (api.versionsFrom) {
    api.versionsFrom('1.0');

    api.use('ground:store@0.1.0');

    // Make sure any storage adapters are loaded first
    api.use([
      'ground:localstorage@0.1.6'
    ], 'client', { weak: true });
  } else {

    api.use('ground-store');

    // Make sure any storage adapters are loaded first
    api.use([
      'ground-localstorage'
    ], 'client', { weak: true });

  }

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
