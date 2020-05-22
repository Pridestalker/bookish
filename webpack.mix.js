const mix = require('laravel-mix');

const purger = mix.inProduction()
  ? [
      require('@fullhuman/postcss-purgecss')({
        content: [
          './templates/**/*.html.twig',
          './assets/scripts/**/*.vue',
          './assets/scripts/**/*.jsx',
          './assets/styles/**/*.scss',
          './assets/styles/**/*.sass',
          './templates/**/*.html',
          './templates/**/*.twig',
        ],

        defaultExtractor: content => content.match(/[\w-\/:]+(?<!:)/g) || [],
      }),
    ]
  : [];

mix
  .sass('assets/styles/main.scss', 'dist/styles/main.css')
  .sass('assets/styles/mail/default/main.sass', 'dist/styles/mail.css')
  .js('assets/scripts/main.js', 'dist/scripts/main.js')
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss'), require('autoprefixer'), ...purger],
  })
    .disableNotifications()
