<?php
/**
 * @var string $email_heading The passed email heading.
 * @var string $email The email address.
 * @var WC_Order $order The order set on hold.
 * @var bool $sent_to_admin if email is being sent to admin.
 * @var bool $plain_text if email is plain text.
 * @var string|null|false $additional_content Additional content (if set).
 * @version 3.7.0
 */

use Timber\Timber;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['heading'] = $email_heading;
$context['to'] = $email;
$context['order'] = $order;
$context['content'] = $additional_content;
$context['css_location'] = \App\Helpers\WP::getStylesheetDir() . '/dist/styles/mail.css';

$templates = [
    Template::emailHtmlTwigFile('customer/processing'),
];

return Timber::render($templates, $context);
