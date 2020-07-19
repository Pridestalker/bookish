<?php

namespace App\Controllers\Meta;

use App\Bootstrap\Container;

class MetaManager
{
	public const T_POST_PRODUCT = 'product';

	public static function load(\Stringable $class)
	{
		/** @var Meta $class */
		$class = Container::get((string) $class);

		do_action('bookish/meta/register/'.(new \ReflectionClass($class))->getShortName());

		$class->register();
	}
}
