<?php

namespace App\Controllers\Hooks\Actions\WooCommerce;

use App\Helpers\Cookie;
use App\Controllers\Hooks\Actions\Action;

class RemoveCouponCookieWhenCouponRemoved extends Action
{
	public function action($coupon_code = '')
	{
		var_dump($coupon_code);
		if(!Cookie::has(CheckForCouponCookie::COOKIE_NAME)) {
			return;
		}

		$code = Cookie::get(CheckForCouponCookie::COOKIE_NAME);

		if ($code === $coupon_code) {
			Cookie::delete(CheckForCouponCookie::COOKIE_NAME);
		}
	}

	public function hook()
	{
		return 'woocommerce_removed_coupon';
	}
}
