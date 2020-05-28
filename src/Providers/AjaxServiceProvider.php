<?php

namespace App\Providers;

use App\Controllers\Http\Ajax\AjaxManager;

class AjaxServiceProvider extends ServiceProvider
{
	protected $ajaxClasses = [];

	public function boot ()
	{
		$this->ajaxClasses = apply_filters('bookish/providers/ajax', []);
	}

	public function register()
	{
		foreach ($this->ajaxClasses as $ajaxClass) {
			AjaxManager::load($ajaxClass);
		}
	}

}
