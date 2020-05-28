<?php

namespace App\Controllers\Http\Ajax;

use Symfony\Component\HttpFoundation\Request;

abstract class AjaxController implements AjaxInterface
{
	protected function getRequest(): Request
	{
		return Request::createFromGlobals();
	}
}
