<?php


namespace App\Controllers\Hooks\Filters\WooCommerce;

use App\Models\Product;
use App\Models\VariableProduct;
use App\Controllers\Hooks\Filters\Filter;

class ProductFromProductId extends Filter
{
    public function filter($id = null)
    {
        if (get_post_type($id) === 'product_variable') {
            return new VariableProduct($id);
        }

        return new Product($id);
    }
}
