<?php
/**
 * @var boolean $password_generated
 * @var string $user_login
 * @var string $email_heading
 * @var string $email
 * @var string $blogname
 * @var string|null $user_pass
 * @var string|null $additional_content
 * @version 3.7.0
 */

use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['generated'] = $password_generated;
$context['password'] = $user_pass;
$context['username'] = $user_login;
$context['additional_content'] = $additional_content;
$context['account_url'] = esc_url(wc_get_page_permalink('myaccount'));
$context['css_location'] = \App\Helpers\WP::getStylesheetDir() . '/dist/styles/mail.css';

$templates = [
    Template::emailHtmlTwigFile('customer/new-account'),
];

return Timber::render($templates, $context);
