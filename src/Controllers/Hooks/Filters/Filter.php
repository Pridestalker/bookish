<?php

namespace App\Controllers\Hooks\Filters;

use App\Controllers\Hooks\Hook;

abstract class Filter extends Hook
{
    abstract public function filter();
}
