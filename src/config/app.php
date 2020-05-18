<?php
namespace App;

use App\Providers\MenuServiceProvider;
use App\Providers\HookServiceProvider;
use App\Providers\AssetsServiceProvider;
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
	    CustomizerServiceProvider::class
    ]
];
