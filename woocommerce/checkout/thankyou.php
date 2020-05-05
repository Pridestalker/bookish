<?php
/**
 * Is a partial template. No need to extends base layout.
 * @var WC_Order $order
 */


use Timber\Timber;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['order'] = $order;

$templates = [
    \App\Helpers\Template::partialHtmlTwigFile('woocommerce/order/thankyou')
];

Timber::render(
    apply_filters('bookish/view-composer/order-thankyou/templates', $templates),
    apply_filters('bookish/view-composer/order-thankyou/context', $context),
    apply_filters('bookish/view-composer/order-thankyou/cache', [ false, false ])
);
