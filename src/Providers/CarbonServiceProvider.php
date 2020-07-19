<?php

namespace App\Providers;

use App\Controllers\Meta\MetaManager;
use App\Controllers\Meta\Fields\Products\ProductVariation;

class CarbonServiceProvider extends ServiceProvider
{
	protected array $carbonFields = [];

	public function boot(): void
	{
		$this->carbonFields = apply_filters('bookish/providers/carbon-meta', [
			ProductVariation::class
		]);
	}

	public function register(): void
	{
		foreach($this->carbonFields as $field) {
			try {
				MetaManager::load($field);
			} catch (\Throwable $e) {
				// Do nothing.
			}
		}
	}
}
