<?php

namespace App\Controllers\Hooks\Filters\WooCommerce;

use App\Controllers\Hooks\Filters\Filter;

class ChangeCheckoutClass extends Filter
{
    public function filter($fields = [])
    {
        $fields['billing']['billing_country']['class'][] = [
	        'block',
	        'appearance-none',
	        'w-full',
	        'bg-white',
	        'border',
	        'border-gray-400',
	        'hover:border-gray-500',
	        'px-4',
	        'py-2',
	        'pr-8',
	        'rounded',
	        'shadow',
	        'leading-tight',
	        'focus:outline-none',
	        'focus:shadow-outline',
        ];
        return $fields;
    }
}

/*
 * "billing_country"]=> array(6) { ["type"]=> string(7) "country" ["label"]=> string(10) "Land/regio" ["required"]=> bool(true) ["class"]=> array(3) { [0]=> string(13) "form-row-wide" [1]=> string(13) "address-field" [2]=> string(23) "update_totals_on_change" } ["autocomplete"]=> string(7) "country" ["priority"]=> int(40)
 */
