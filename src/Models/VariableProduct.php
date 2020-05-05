<?php

namespace App\Models;

use WC_Product_Variable;

class VariableProduct extends Product
{
    /**
     * @var WC_Product_Variable|null $product
     */
    public $product = null;
    protected static $variation_attribute_cache = [];
    protected static $variations_cache = [];

    public function get_price()
    {
        if (isset(static::$price_cache[$this->id])) {
            return static::$price_cache[$this->id];
        }

        $this->setProduct();

        return static::$price_cache[$this->id] = $this->product->get_variation_price();
    }

    public function get_sale_price()
    {
        if (isset(static::$sale_price_cache[$this->id])) {
            return static::$sale_price_cache[$this->id];
        }

        $this->setProduct();

        return static::$sale_price_cache[$this->id] = $this->product->get_variation_sale_price();
    }

    public function get_variation_attributes()
    {
        if (isset(static::$variation_attribute_cache[$this->id])) {
            return static::$variation_attribute_cache[$this->id];
        }

        $this->setProduct();

        return static::$variation_attribute_cache[$this->id] = $this->product->get_variation_attributes();
    }

    public function get_variations()
    {
        if (isset(static::$variations_cache[$this->id])) {
            return static::$variations_cache[$this->id];
        }

        $this->setProduct();

        return static::$variations_cache[$this->id] = $this->product->get_available_variations();
    }
}
