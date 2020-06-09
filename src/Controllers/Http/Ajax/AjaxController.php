<?php

namespace App\Controllers\Http\Ajax;

use Symfony\Component\HttpFoundation\Request;

abstract class AjaxController implements AjaxInterface
{
    protected function getRequest(): Request
    {
        return Request::createFromGlobals();
    }

    protected function getRequestWithJson(): Request
    {
        $request = Request::createFromGlobals();

        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : []);

        return $request;
    }
}
