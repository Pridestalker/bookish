<?php

namespace App\Providers;

defined('ABSPATH') || exit(0);

use App\Controllers\TwigFunctions\Favorites;
use Twig\Environment;
use Twig\TwigFunction;
use App\Controllers\TwigFunctions\AdminHelpers;
use App\Controllers\TwigFunctions\CustomizerHelper;
use App\Controllers\TwigFunctions\ProductCategoryUrl;
use App\Controllers\TwigFunctions\WooCommerceGeneral;

class FunctionServiceProvider extends ServiceProvider
{
    protected array $functions = [];

    public function boot(): void
    {
        $this->functions = apply_filters('bookish/providers/functions', [
            'product_cat_url_on_name' => [ProductCategoryUrl::class, 'getUrlOnName'],
            'product_cat_url_on_id' => [ProductCategoryUrl::class, 'getUrlOnID'],
            'get_store_url' => [WooCommerceGeneral::class, 'getShopUrl'],
            'get_cart_url' => [WooCommerceGeneral::class, 'getCartUrl'],
            'bookish_theme_option' => [CustomizerHelper::class, 'getThemeOption'],
            'is_admin' => [AdminHelpers::class, 'isAdmin'],
            'get_favorites_button' => [Favorites::class, 'getButton']
        ]);

        add_filter('timber/twig', [$this, 'registerFunctions']);
    }

    /**
     * @param Environment $twig
     *
     * @return Environment
     */
    public function registerFunctions(Environment $twig): Environment
    {
        foreach ($this->functions as $name => $function) {
            $twig->addFunction(new TwigFunction($name, $function));
        }

        return $twig;
    }
}
