<?php
namespace App;

use App\Providers\MenuServiceProvider;
use App\Providers\AssetsServiceProvider;
use App\Providers\FunctionServiceProvider;

return [
	'providers'     => [
	    MenuServiceProvider::class,
		AssetsServiceProvider::class,
		FunctionServiceProvider::class
    ]
];
