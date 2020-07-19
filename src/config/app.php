<?php

namespace App;

defined('ABSPATH') || exit(0);

use App\Providers\MenuServiceProvider;
use App\Providers\HookServiceProvider;
use App\Providers\AjaxServiceProvider;
use App\Providers\RestServiceProvider;
use App\Providers\AssetsServiceProvider;
use App\Providers\CarbonServiceProvider;
use App\Providers\UpdatesServiceProvider;
use App\Providers\FunctionServiceProvider;
use App\Providers\CustomizerServiceProvider;

return [
    'providers'     => [
        MenuServiceProvider::class,
        AssetsServiceProvider::class,
        FunctionServiceProvider::class,
        HookServiceProvider::class,
        UpdatesServiceProvider::class,
        CustomizerServiceProvider::class,
        AjaxServiceProvider::class,
        RestServiceProvider::class,
	    CarbonServiceProvider::class
    ]
];
