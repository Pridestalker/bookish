<?php

namespace App\Controllers\Meta\Fields\Products;

use Carbon_Fields\Field;
use App\Controllers\Meta\MetaManager;
use Carbon_Fields\Container\Container;
use App\Controllers\Meta\Fields\PostMeta;

class ProductVariation extends PostMeta
{
	protected string $name = 'Product Variations';

	public function register()
	{
		Container::make('post_meta', $this->name)
			->where('post_type', '=', MetaManager::T_POST_PRODUCT)
			->add_fields($this->fields);
	}

	public function loadFields()
	{
		$this->fields []= Field::make('association', 'variation_kleur_lint', 'Lint variatie');
		$this->fields []= Field::make('association', 'variation_voor_soort_boek', 'Soort boek variatie');
	}
}
