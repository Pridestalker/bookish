<?php

use Timber\Post;
use Timber\Timber;
use App\Helpers\Woo;
use App\Helpers\Cookie;
use App\Helpers\Template;
use App\Bootstrap\Env;
use App\Models\Enums\Cookies;

$context = Timber::get_context();
$context['post'] = new Post();

$context['popular_products'] = Woo::getPopularProducts(3);
$context['new_products'] = Woo::getNewProducts(3);
$context['is_recurring_visitor'] = Cookie::hasCookie(Cookies::RECURRING_VISITOR);
$context['time'] = microtime();


if (isset($_GET['promo_code'])) {
	$code = $_GET['promo_code'];

	Cookie::setCookie(
		'promo_code',
		$code,
		false
	);
}

$templates = [
    Template::viewHtmlTwigFile('front-page'),
    Template::viewHtmlTwigFile('page')
];

$caches = [
    Env::getInt('DEFAULT_USER_CACHING', false),
    Env::getBool('DEFAULT_ADMIN_CACHING', false)
];

Timber::render(
    apply_filters('bookish/view-composer/front-page/templates', $templates),
    apply_filters('bookish/view-composer/front-page/context', $context),
    apply_filters('bookish/view/composer/front-page/cache', $caches)
);

Cookie::setRecurringVisitor();
