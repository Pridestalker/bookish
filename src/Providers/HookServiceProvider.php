<?php

namespace App\Providers;

use App\Models\Product;
use App\Models\VariableProduct;
use App\Controllers\Hooks\Actions\Action;
use App\Controllers\Hooks\Filters\Filter;
use App\Controllers\Hooks\Filters\WooCommerce\ProductFromProductId;

class HookServiceProvider extends ServiceProvider
{
    /**
     * @var Action[]
     */
    protected $actions = [];

    /**
     * @var Filter[]
     */
    protected $filters = [];

    public function boot(): void
    {
        $this->filters = apply_filters('bookish/providers/filters', [
            'bookish/view/cart/product-from-id' => ProductFromProductId::class
        ]);

        $this->actions = apply_filters('bookish/providers/actions', [

        ]);
    }

    public function register(): void
    {
        foreach ($this->actions as $hookName => $action) {
            $called = new $action();
            add_action($hookName, $called->action(), $called->priority(), $called->parameterCount());
        }

        foreach ($this->filters as $hookName => $filter) {
            $called = new $filter();
            add_filter($hookName, [$called, 'filter'], $called->priority(), $called->parameterCount());
        }
    }
}
