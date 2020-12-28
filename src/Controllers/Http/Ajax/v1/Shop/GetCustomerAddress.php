<?php

namespace App\Controllers\Http\Ajax\v1\Shop;

use App\Controllers\Http\Ajax\AjaxController;
use App\Controllers\Services\Postcode\PostcodeBridge;

class GetCustomerAddress extends AjaxController
{
    public function isPrivate(): bool
    {
        return true;
    }

    public function actionName(): string
    {
        return 'get_user_shipping_address';
    }

    public function hookName(): string
    {
        return 'getShippingAddress';
    }

    public function getShippingAddress()
    {
        $request = $this->getRequestWithJson();

        $postcodeBridge = new PostcodeBridge();
        $postcode = $postcodeBridge->buildNumber($request->get('number'))
            ->buildPostcode($request->get('postcode'))
            ->build()->get();

        wp_send_json_success($postcode);
    }
}
