<?php

namespace App\Controllers\TwigFunctions;

use App\Helpers\Str;

class CustomizerHelper
{
	/**
	 * @param string $name
	 *
	 * @return mixed
	 */
    public static function getThemeOption(string $name, $default = false)
    {
        return get_theme_mod('_bookish_' . Str::slug($name), $default);
    }
}
