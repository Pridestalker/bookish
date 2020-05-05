<?php

namespace App\Models;

use WC_Product;
use Timber\Post;
use Timber\Term;
use Timber\PostQuery;
use App\Helpers\Terms;
use WC_Product_Attribute;
use App\Controllers\TwigFunctions\ProductCategoryUrl;

class Product extends Post
{
    public function __call($field, $args)
    {
        return call_user_func_array([$this->setProduct(), $field], $args);
    }

    /**
     * @var WC_Product|null $product
     */
    public $product = null;
    protected static $price_cache = [];
    protected static $sale_price_cache = [];

    protected static $categories_cache = [];
    protected static $attributes_cache = [];

    protected static $stock_cache = [];

    protected static $related_cache = [];
    protected static $product_cache = [];

    protected static $gallery_id_cache = [];

    public function get_price()
    {
        if (isset(static::$price_cache[$this->id])) {
            return static::$price_cache[$this->id];
        }

        $this->setProduct();

        return static::$price_cache[$this->id] = $this->product->get_regular_price();
    }

    public function get_title()
    {
        return $this->title();
    }

    /**
     * @param string       $separator
     * @param array|string $classes
     *
     * @return string
     */
    public function get_product_categories_links($separator = ', ', $classes = null)
    {
        if (!isset(static::$categories_cache[$this->id])) {
            $this->setProduct();
            static::$categories_cache[$this->id] = $this->product->get_category_ids();
        }

        $data = [];
        foreach (static::$categories_cache[$this->id] as $category) {
            $data []= sprintf(
                '<a href="%1$s" class="%2$s">%3$s</a>',
                ProductCategoryUrl::getUrlOnID($category),
                implode(' ', (array) $classes),
                Terms::getTermNameOnId($category, 'product_cat')
            );
        }

        return implode($separator, $data);
    }

    public function get_sale_price()
    {
        if (isset(static::$sale_price_cache[$this->id])) {
            return static::$sale_price_cache[$this->id];
        }

        $this->setProduct();

        return static::$sale_price_cache[$this->id]= $this->product->get_sale_price();
    }

    public function get_attributes()
    {
        if (isset(static::$attributes_cache[$this->id])) {
            return static::$attributes_cache[$this->id];
        }
        $this->setProduct();

        /** @var WC_Product_Attribute $attribute */
        foreach ($this->product->get_attributes() as $attribute) {
            if (!$attribute->get_visible()) {
                continue;
            }
            $name = $attribute->get_name();
            static::$attributes_cache[$this->id] [$name]= [
                'name' => str_replace('-', ' ', str_replace('pa_', '', $name)),
                'options' => array_map(static function ($item) {
                    return new Term($item);
                }, $attribute->get_options()),
            ];
        }

        return static::$attributes_cache[$this->id];
    }

    public function is_on_sale()
    {
        $this->setProduct();

        return $this->product->is_on_sale();
    }

    public function is_in_stock()
    {
        if (isset(static::$stock_cache[$this->id]['in_stock'])) {
            return static::$stock_cache[$this->id]['in_stock'];
        }

        $this->setProduct();

        return static::$stock_cache[$this->id]['in_stock'] = $this->product->is_in_stock();
    }

    public function can_backorder()
    {
        if (isset(static::$stock_cache[$this->id]['on_backorder'])) {
            return static::$stock_cache[$this->id]['on_backorder'];
        }

        $this->setProduct();

        return static::$stock_cache[$this->id]['on_backorder'] = $this->product->backorders_allowed();
    }

    public function related_products()
    {
        if (!isset(static::$related_cache[$this->id])) {
            static::$related_cache[$this->id] = wc_get_related_products($this->id, 3);
        }

        return new PostQuery(static::$related_cache[$this->id], __CLASS__);
    }

    public function gallery_items()
    {
        if (isset(static::$gallery_id_cache[$this->id])) {
            return static::$gallery_id_cache[$this->id];
        }

        $this->setProduct();

        return static::$gallery_id_cache[$this->id] = $this->product->get_gallery_image_ids();
    }

    public function setProduct(): \WC_Product
    {
        if ($this->product === null) {
            if (isset(static::$product_cache[$this->id])) {
                $this->product = static::$product_cache[$this->id];
            } else {
                $this->product = static::$product_cache[$this->id] = wc_get_product($this->id);
            }
        }

        return $this->product;
    }
}
