<?php


namespace App\Controllers\Hooks\Actions\WooCommerce;


use App\Helpers\Cookie;
use App\Controllers\Hooks\Actions\Action;

class CheckForCouponCookie extends Action
{
	const COOKIE_NAME = 'promo_code';

	public function action()
	{
		if (!isset($_GET[static::COOKIE_NAME])) {
			return;
		}

		$code = $_GET[static::COOKIE_NAME];
		if (Cookie::hasCookie(static::COOKIE_NAME) && Cookie::getCookie(static::COOKIE_NAME) == $code) {
			return;
		}

		Cookie::setCookie(
			static::COOKIE_NAME,
			$code,
			false
		);
	}

	public function hook ()
	{
		return 'init';
	}
}
