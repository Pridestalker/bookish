const mix = require('laravel-mix');
mix
  .js('assets/scripts/main.js', 'dist/scripts/main.js')
  .extract()
  .disableNotifications();
