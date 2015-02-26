Package.describe({
  name: 'adrianmc:ionicons-cdn',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Ionicons loaded from a CDN',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/adrianmc/meteor-ionicons-cdn.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.addFiles('load.js', 'client');
});