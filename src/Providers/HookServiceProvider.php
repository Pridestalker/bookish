<?php

namespace App\Providers;

use App\Models\Product;
use App\Bootstrap\Container;
use App\Models\VariableProduct;
use App\Controllers\Hooks\Actions\Init;
use App\Controllers\Hooks\Actions\Action;
use App\Controllers\Hooks\Filters\Filter;
use App\Controllers\Hooks\Filters\Twig\AddTwigExtensions;
use App\Controllers\Hooks\Filters\WooCommerce\CustomOrderAction;
use App\Controllers\Hooks\Filters\WooCommerce\ChangeCheckoutClass;
use App\Controllers\Hooks\Filters\WooCommerce\ProductFromProductId;
use App\Controllers\Hooks\Filters\WooCommerce\CustomSingleOrderStatus;
use App\Controllers\Hooks\Actions\WooCommerce\OrderStatusPaymentReceived;
use App\Controllers\Hooks\Actions\WooCommerce\PaymentReceivedCustomNotification;

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
            ProductFromProductId::class,
            ChangeCheckoutClass::class,
            AddTwigExtensions::class,
            CustomSingleOrderStatus::class,
	        CustomOrderAction::class
        ]);

        $this->actions = apply_filters('bookish/providers/actions', [
            Init::class,
            OrderStatusPaymentReceived::class,
	        PaymentReceivedCustomNotification::class,
        ]);

        $this->filters_unhook = apply_filters('bookish/providers/filters/unhook', []);

        $this->actions_unhook = apply_filters('bookish/providers/actions/unhook', [
            'woocommerce_before_checkout_form' => [
                'name' => 'woocommerce_checkout_coupon_form',
                'priority' => 10
            ],
        ]);

        add_action('woocommerce_review_order_before_payment', 'woocommerce_checkout_coupon_form');
    }

    public function register(): void
    {
        foreach ($this->actions as $action) {
            if (class_exists($action) && is_subclass_of($action, Action::class)) {
                $called = Container::get($action);
                add_action($called->hook(), [$called, 'action'], $called->priority(), $called->parameterCount());
            } else {
                // Do Nothing.
            }
        }

        foreach ($this->filters as $filter) {
            if (class_exists($filter) && is_subclass_of($filter, Filter::class)) {
                $called = Container::get($filter);
                add_filter($called->hook(), [$called, 'filter'], $called->priority(), $called->parameterCount());
            } else {
                // Do nothing.
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
