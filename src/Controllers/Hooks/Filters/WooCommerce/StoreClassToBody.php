<?php

namespace App\Controllers\Hooks\Filters\WooCommerce;

use App\Controllers\Hooks\Filters\Filter;

class StoreClassToBody extends Filter
{
	public function filter($classes = [])
	{
		if (is_shop()) {
			$classes[] = 'wooStore';
		}

		return $classes;
	}

	public function hook()
	{
		return 'body_class';
	}
}
