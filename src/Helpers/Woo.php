<?php

namespace App\Helpers;

defined('ABSPATH') || exit(0);

use Timber\Helper;
use Timber\PostQuery;
use App\Models\Product;
use App\Models\VariableProduct;

class Woo
{
    /**
     * Gets posts,
     *
     * @param int   $limit
     * @return false|mixed
     */
    public static function getPopularProducts($limit = 4)
    {
        return Helper::transient('_wc_popular_products', static function () use ($limit) {
            $args = [
                'post_type' => 'product',
                'posts_per_page' => $limit,
                'orderby' => 'meta_value_num',
                'order' => 'desc',
                'meta_key' => '_product_view_count',
            ];


            $posts = [];

            /** @var Product $post */
            foreach (new PostQuery($args, \App\Models\Product::class) as $post) {
                $posts[] = new Product($post->id);
            }

            return $posts;
        }, 3600);
    }

    public static function getNewProducts($limit = 4)
    {
        return Helper::transient('_wc_last_changed_products', static function () use ($limit) {
            $args = [
                'post_type' => 'product',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => $limit,
                'tax_query' => [
                    [
                        'taxonomy' => 'product_visibility',
                        'field' => 'name',
                        'terms' => ['exclude-from-catalog', 'exclude-from-search'],
                        'operator' => 'NOT IN',
                    ]
                ]
            ];

            $posts = [];

            /** @var Product $post */
            foreach (new PostQuery($args, \App\Models\Product::class) as $post) {
                $posts[] = new Product($post->id);
            }

            return $posts;
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
