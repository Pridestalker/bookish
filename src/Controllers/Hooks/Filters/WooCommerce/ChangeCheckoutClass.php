<?php

namespace App\Controllers\Hooks\Filters\WooCommerce;

use App\Controllers\Hooks\Filters\Filter;

class ChangeCheckoutClass extends Filter
{
    public function filter($fields = [])
    {
        $fields['billing']['billing_country']['input_class'][] = "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline";
        return $fields;
    }
}
