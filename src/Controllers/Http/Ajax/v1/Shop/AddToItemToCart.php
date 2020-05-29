<?php

namespace App\Controllers\Http\Ajax\v1\Shop;

use App\Controllers\Http\Ajax\AjaxController;

class AddToItemToCart extends AjaxController
{
	public function isPrivate (): bool
	{
		return false;
	}

	public function actionName (): string
	{
		return 'add_product_to_cart';
	}

	public function hookName (): string
	{
		return 'addToCart';
	}

	public function addToCart()
	{
		$request = $this->getRequest();

		$productID = $request->get('product_id', false);
		$quantity = $request->get('qty', 1);
	}
}
