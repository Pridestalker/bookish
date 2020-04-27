<?php

use Timber\{Post, Timber};
use App\Helpers\Template;

$context = Timber::get_context();
$context['post'] = new Post();

$context['popular_products'] = \App\Helpers\Woo::getPopularProducts(3);
$context['new_products'] = \App\Helpers\Woo::getNewProducts(3);


$templates = [
	Template::viewHtmlTwigFile('front-page'),
	Template::viewHtmlTwigFile('page')
];

return Timber::render(
	apply_filters('bookish/view-composer/front-page/templates', $templates),
	apply_filters('bookish/view-composer/front-page/context', $context),
	apply_filters('bookish/view/composer/front-page/cache', [ 3600, false])
);
