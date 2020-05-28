<?php

namespace App\Providers;

use App\Controllers\Http\Ajax\AjaxManager;
use App\Controllers\Http\Ajax\v1\Shop\CurrentUserCartItems;

class AjaxServiceProvider extends ServiceProvider
{
	protected $ajaxClasses = [];

	public function boot ()
	{
		$this->ajaxClasses = apply_filters('bookish/providers/ajax', [
			CurrentUserCartItems::class
		]);
	}

	public function register()
	{
		foreach ($this->ajaxClasses as $ajaxClass) {
			AjaxManager::load($ajaxClass);
		}
	}

}
