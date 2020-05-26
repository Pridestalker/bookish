<?php

namespace App\Providers;

use App\Models\Product;
use App\Bootstrap\Container;
use App\Models\VariableProduct;
use App\Controllers\Hooks\Actions\Init;
use App\Controllers\Hooks\Actions\Action;
use App\Controllers\Hooks\Filters\Filter;
use App\Controllers\Hooks\Filters\WooCommerce\ChangeCheckoutClass;
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
            'bookish/view/cart/product-from-id' => ProductFromProductId::class,
            'woocommerce_checkout_fields' => ChangeCheckoutClass::class,
        ]);

        $this->actions = apply_filters('bookish/providers/actions', [
            Init::class,
            [
            	'hook' => 'woocommerce_review_order_before_payment',
	            'callback' => 'woocommerce_checkout_coupon_form'
            ],
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
        foreach ($this->actions as $action) {
        	if (is_array($action)) {
		        add_action($action['hook'], $action['callback']);
	        } else if (class_exists($action) && is_subclass_of($action, Action::class)) {
		        $called = Container::get($action);
		        add_action($called->hook(), [$called, 'action'], $called->priority(), $called->parameterCount());
	        }
        }

        foreach ($this->filters as $hookName => $filter) {
            if (class_exists($filter) && is_subclass_of($filter, Filter::class)) {
                $called = Container::get($filter);
                add_filter($hookName, [$called, 'filter'], $called->priority(), $called->parameterCount());
            } else {
                add_filter($hookName, $filter);
            }
        }

        foreach ($this->actions_unhook as $hook => $item) {
            remove_action($hook, $item['name'], $item['priority']);
        }

        foreach ($this->filters_unhook as $hook => $item) {
            remove_filter($hook, $item['name'], $item['priority']);
        }
    }
}
