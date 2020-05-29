<?php

namespace App\Controllers\TwigFunctions;

class AdminHelpers
{
	public static function isAdmin()
	{
		return is_user_admin();
	}
}
