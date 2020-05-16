<?php

namespace App\Providers;

use App\Models\Product;
use App\Models\VariableProduct;
use App\Controllers\Hooks\Actions\Init;
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
    protected $actions_unhook = [];
    protected $filters_unhook = [];

    public function boot(): void
    {
        $this->filters = apply_filters('bookish/providers/filters', [
            'bookish/view/cart/product-from-id' => ProductFromProductId::class
        ]);

        $this->actions = apply_filters('bookish/providers/actions', [
            'init' => Init::class,
            'woocommerce_review_order_before_payment' => 'woocommerce_checkout_coupon_form'
        ]);

        $this->filters_unhook = apply_filters('bookish/providers/filters/unhook', []);

        $this->actions_unhook = apply_filters('bookish/providers/actions/unhook', [
            'woocommerce_before_checkout_form' => [
                'name' => 'woocommerce_checkout_coupon_form',
                'priority' => 10
            ],
        ]);
    }

    public function register(): void
    {
        foreach ($this->actions as $hookName => $action) {
            if (class_exists($action) && is_subclass_of($action, Action::class)) {
                $called = new $action();
                add_action($hookName, [$called, 'action'], $called->priority(), $called->parameterCount());
            } else {
                add_action($hookName, $action);
            }
        }

        foreach ($this->filters as $hookName => $filter) {
            $called = new $filter();
            add_filter($hookName, [$called, 'filter'], $called->priority(), $called->parameterCount());
        }

        foreach ($this->actions_unhook as $hook => $item) {
            remove_action($hook, $item['name'], $item['priority']);
        }

        foreach ($this->filters_unhook as $hook => $item) {
            remove_filter($hook, $item['name'], $item['priority']);
        }
    }
}
