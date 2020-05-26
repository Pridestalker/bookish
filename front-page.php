<?php

use Timber\Post;
use Timber\Timber;
use App\Helpers\Woo;
use App\Helpers\Template;
use App\Bootstrap\Env;

$context = Timber::get_context();
$context['post'] = new Post();

$context['popular_products'] = Woo::getPopularProducts(3);
$context['new_products'] = Woo::getNewProducts(3);
$context['time'] = microtime();


$templates = [
    Template::viewHtmlTwigFile('front-page'),
    Template::viewHtmlTwigFile('page')
];

$caches = [
    Env::getInt('DEFAULT_USER_CACHING', 600),
    Env::getBool('DEFAULT_ADMIN_CACHING', false)
];

return Timber::render(
    apply_filters('bookish/view-composer/front-page/templates', $templates),
    apply_filters('bookish/view-composer/front-page/context', $context),
    apply_filters('bookish/view/composer/front-page/cache', $caches)
);
