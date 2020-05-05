<?php
/**
 * This is a partial file in name mostly because the
 * Template file does not need a {%extends app.twig%}.
 */
use Timber\Post;
use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['post'] = new Post();
$context['cart'] = WC()->cart;

$templates = [
    Template::partialHtmlTwigFile('woocommerce/cart/cart')
];

Timber::render(
    apply_filters('bookish/view-composer/order-cart/templates', $templates),
    apply_filters('bookish/view-composer/order-cart/context', $context),
    apply_filters('bookish/view-composer/order-cart/cache', [false, false])
);
