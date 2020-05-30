const mix = require('laravel-mix');
mix
  .js('assets/scripts/main.js', 'dist/scripts/main.js')
  .react('assets/services/mini-cart/app.js', 'dist/services/mini-cart.js')
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
