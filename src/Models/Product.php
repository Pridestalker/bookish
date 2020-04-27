<?php

namespace App\Models;

use WC_Product;
use Timber\Post;
use Timber\Term;
use App\Helpers\Terms;
use App\Controllers\TwigFunctions\ProductCategoryUrl;

class Product extends Post
{
	/**
	 * @var WC_Product|null $product
	 */
	public $product = null;
	public static $price = null;
	public static $categories = [];

	public function get_price()
	{
		if (null !== static::$price) {
			return static::$price;
		}

		$this->setProduct();

		return static::$price = $this->product->get_price();
	}

	/**
	 * @param array|string $classes
	 *
	 * @return string
	 */
	public function get_product_categories_links($classes = null)
	{
		if (empty(static::$categories)) {
			$this->setProduct();
			static::$categories = $this->product->get_category_ids();
		}

		$data = [];
		foreach(static::$categories as $category) {
			$data []= sprintf(
				'<a href="%1$s" class="%2$s">%3$s</a>',
				ProductCategoryUrl::getUrlOnID($category),
				implode(' ', (array) $classes),
				Terms::getTermNameOnId($category, 'product_cat')
			);
		}

		return implode(', ', $data);
	}

	private function setProduct():void
	{
		if ($this->product === null) {
			$this->product = wc_get_product($this->id);
		}
	}
}
