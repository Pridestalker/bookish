<?php

use Timber\Post;
use Timber\Timber;
use Timber\PostQuery;
use App\Models\Product;
use App\Helpers\Template;
use App\Models\VariableProduct;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['post'] = new Post();
$context['products'] = new PostQuery(false, Product::class);

/** @var Product $product */
foreach ($context['products'] as $key => $product) {
    if ($product->setProduct()->is_type('variable')) {
        $context['products'][$key] = new VariableProduct($product->id);
    }
}

$templates = [
    Template::viewHtmlTwigFile('woo/archive-product/main'),
    Template::viewHtmlTwigFile('page'),
];

Timber::render(
    apply_filters('bookish/view-composer/archive-product/templates', $templates),
    apply_filters('bookish/view-composer/archive-product/context', $context),
    apply_filters('bookish/view-composer/archive-product/cache', [false, false])
);
