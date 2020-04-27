<?php

namespace App\Providers;

use App\Helpers\WP;

class AssetsServiceProvider extends ServiceProvider
{
	public function boot()
	{
		WP::addStyle(
			'main-style',
			WP::getAssetLocation(['dist', 'styles', 'main.css']),
			[],
			filemtime(WP::getAssetLocation('dist/styles/main.css', false))
		);

		WP::addScript(
			'main-script',
			WP::getAssetLocation(['dist', 'scripts', 'main.js']),
			[],
			filemtime(WP::getAssetLocation('dist/scripts/main.js', false))
		);
	}

	public function register()
	{
		WP::enqueueStyles();
		WP::enqueueScripts();

		add_action('wp_enqueue_scripts', [$this, 'dequeueAssets'], 20);
		add_filter('woocommerce_enqueue_styles', '__return_empty_array');

	}

	public function dequeueAssets(): void
	{
		if (!is_admin()) {
			WP::removeScript('jquery');
			WP::removeScript('wp-embed');
			WP::removeScript('hoverintent-js');
		}

		if (!is_admin_bar_showing()) {
			WP::removeStyle('dashicons');
		}

		WP::removeStyle('wp-block-library');
		WP::removeStyle('wc-block-style');
	}

}
