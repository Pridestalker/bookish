<?php

namespace App\Controllers\Hooks;

abstract class Hook
{
	/**
	 * @return string The hookname to apply the Action to
	 */
	abstract public function hook();

	public function priority(): int
	{
		return 10;
	}

	public function parameterCount(): int
	{
		return 1;
	}
}
