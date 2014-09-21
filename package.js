Package.describe({
  name: "ground:servertime",
  version: "0.0.0",
  summary: "Adds server time on the client",
  git: "https://github.com/GroundMeteor/servertime.git"  
});

Package.on_use(function (api) {

  if (api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.1');

    api.use('ground:store@0.0.0');

    // Make sure any storage adapters are loaded first
    api.use([
      'ground:localstorage@0.0.0'
    ], 'client', { weak: true });
  } else {

    api.use('ground-store');

    // Make sure any storage adapters are loaded first
    api.use([
      'ground-localstorage'
    ], 'client', { weak: true });

  }

  api.export('ServerTime');

  api.add_files('client.js', 'client');
  api.add_files('server.js', 'server');
});

Package.on_test(function (api) {
  if (api.versionsFrom) {
    api.use('ground:servertime', ['client', 'server']);
  } else {
    api.use('ground-servertime', ['client', 'server']);
  }
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson']);

  api.add_files('client.tests.js', 'client');
  api.add_files('server.tests.js', 'server');

});
