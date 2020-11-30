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
    .js('assets/scripts/main.js', 'scripts/main.js')
    .react()
    .extract()
    .webpackConfig({
        output: {
            chunkFilename: '[name].js?id=[chunkhash]',
        },
        resolve: {
            alias: {
                react: 'preact/compat',
                'react-dom': 'preact/compat'
            }
        }
    })
    .disableNotifications();


mix
    .sass('assets/styles/main.scss', 'styles/main.css')
    .sass('assets/styles/mail/default/main.sass', 'styles/mail.css')
    .sass('assets/styles/admin/main.sass', 'styles/admin.css')
    .options({
        processCssUrls: false,
        postCss: [require('tailwindcss'), require('autoprefixer'), ...purger],
    });

mix.setPublicPath('dist');
