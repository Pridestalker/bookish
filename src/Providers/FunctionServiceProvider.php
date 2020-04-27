<?php

namespace App\Providers;

use Twig\Environment;
use App\Controllers\TwigFunctions\ProductCategoryUrl;
use App\Controllers\TwigFunctions\WooCommerceGeneral;

class FunctionServiceProvider extends ServiceProvider
{
	public function boot(): void
	{
		add_filter('timber/twig', [$this, 'registerFunctions']);
	}

	/**
	 * @param Environment $twig
	 *
	 * @return Environment
	 */
	public function registerFunctions(Environment $twig): Environment
	{
		$twig->addFunction(new \Timber\Twig_Function('product_cat_url_on_name', [ProductCategoryUrl::class, 'getUrlOnName']));
		$twig->addFunction(new \Timber\Twig_Function('product_cat_url_on_id', [ProductCategoryUrl::class, 'getUrlOnID']));
		$twig->addFunction(new \Timber\Twig_Function('get_store_url', [WooCommerceGeneral::class, 'getShopUrl']));

		return $twig;
	}
}
