<?php

namespace App\Controllers\Http\Ajax\v1\Shop;

use App\Controllers\Http\Ajax\AjaxController;

class CurrentUserCartItems extends AjaxController
{

	public function isPrivate (): bool
	{
		return false;
	}

	public function actionName (): string
	{
		return 'get_cart_item_count';
	}

	public function hookName (): string
	{
		return 'getCartItemCount';
	}

	public function getCartItemCount()
	{
		$cart = WC()->cart;

		wp_send_json_success([
			'cart_items_count' => $cart->get_cart_contents_count(),
			'cart_items' => $cart->get_cart_contents(),
		]);
	}

}
