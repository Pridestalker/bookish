<?php

namespace App\Controllers\TwigFunctions;

defined('ABSPATH') || exit(0);

class WooCommerceGeneral
{
	/**
	 * Gets the current shop page
	 *
	 * @return string
	 */
	public static function getShopUrl(): string
	{
		return static::getUrl('shop');
	}

	public static function getUrl(string $page): string
	{
		return get_permalink(wc_get_page_id($page));
	}
}
