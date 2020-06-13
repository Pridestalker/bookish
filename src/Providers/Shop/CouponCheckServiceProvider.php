<?php

namespace App\Providers\Shop;

use App\Helpers\Cookie;
use App\Providers\ServiceProvider;
use Symfony\Component\HttpFoundation\Request;

class CouponCheckServiceProvider extends ServiceProvider
{
	public const COOKIE_NAME = 'promo_code';

	public function register()
	{
		$request = Request::createFromGlobals();

		if ($code = $request->query->get('promo_code', false)) {
			if (Cookie::hasCookie(static::COOKIE_NAME) && Cookie::getCookie(static::COOKIE_NAME) === $code) {
				return;
			}

			Cookie::setCookie(
				static::COOKIE_NAME,
				$code,
				0
			);
		}
	}
}
