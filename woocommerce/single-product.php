<?php

use Timber\Timber;
use App\Helpers\Woo;
use App\Helpers\Cookie;
use App\Models\Product;
use App\Helpers\Template;
use App\Models\VariableProduct;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['product'] = new Product();

Woo::setProductView($context['product']->id);

$templates = [
    Template::viewHtmlTwigFile('woo/single-product/specific/'. $context['product']->slug),
    Template::viewHtmlTwigFile('woo/single-product/main'),
    Template::viewHtmlTwigFile('page'),
];

if ($context['product']->setProduct()->is_type('variable')) {
    $context['product'] = new VariableProduct();
    array_unshift($templates, Template::viewHtmlTwigFile('woo/single-product/variable'));
}

Timber::render(
    apply_filters('bookish/view-composer/single-product/templates', $templates),
    apply_filters('bookish/view-composer/single-product/context', $context),
    apply_filters('bookish/view-composer/single-product/cache', [600, false])
);

Cookie::setLastViewedProduct($context['product']->id);
