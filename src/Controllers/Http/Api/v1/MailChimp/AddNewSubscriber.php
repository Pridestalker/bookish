<?php

namespace App\Controllers\Http\Api\v1\MailChimp;

use App\Controllers\Http\Api\RestController;
use Symfony\Component\HttpClient\HttpClient;

class AddNewSubscriber extends RestController
{
	public function endpoint (): string
	{
		return 'mailchimp';
	}

	public function methods (): array
	{
		return [
			[
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => [$this, 'create_new_user'],
				'permission_callback' => [$this, 'create_new_user_permission_callback']
			]
		];
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function create_new_user(\WP_REST_Request $request)
	{
		$params = $request->get_body_params();

		$client = HttpClient::createForBaseUri('api.mailchimp.com/3.0/');
		$res = $client->request(
			'post',
			'lists/2bc0aa7573/members',
			[

			]
		);
	}

	public function create_new_user_permission_callback()
	{
		return true;
	}
}
