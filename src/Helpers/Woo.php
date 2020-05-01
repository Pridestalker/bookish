<?php

namespace App\Helpers;

use Timber\Helper;
use Timber\PostQuery;

class Woo
{
    public static function getPopularProducts($limit = 4)
    {
        return Helper::transient('_wc_popular_products', static function () use ($limit) {
            $args = [
                'post_type' => 'product',
                'posts_per_page' => $limit,
                'orderby' => 'meta_value_num',
                'order' => 'desc',
                'meta_key' => '_product_view_count'
            ];

            return new PostQuery($args, \App\Models\Product::class);
        }, 3600);
    }

    public static function getNewProducts($limit = 4)
    {
        return Helper::transient('_wc_last_modified_products', static function () use ($limit) {
            $args = [
                'post_type' => 'product',
                'orderby' => 'modified',
                'order' => 'DESC',
                'posts_per_page' => $limit
            ];

            return new PostQuery($args, \App\Models\Product::class);
        }, 600);
    }

    public static function setProductView(int $product)
    {
        $key = '_product_view_count';
        $viewCount = get_post_meta($product, $key, true);

        if (!$viewCount) {
            add_post_meta($product, $key, 1);
        } else {
            update_post_meta($product, $key, (int) $viewCount + 1);
        }
    }
}
