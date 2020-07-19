<?php

namespace App\Controllers\Meta;

abstract class Meta
{
	protected string $name;
	protected array $fields;

	abstract public function register();
	abstract public function loadFields();
}
