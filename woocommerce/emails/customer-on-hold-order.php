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

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['heading'] = $email_heading;
$context['to'] = $email;
$context['order'] = $order;
$context['content'] = $additional_content;
$context['css_location'] = \App\Helpers\WP::getStylesheetDir() . '/dist/mail.css';

$templates = [
    \App\Helpers\Template::emailHtmlTwigFile('customer/on-hold'),
];

return Timber::render($templates, $context);

/*
 * @hooked WC_Emails::email_header() Output the email header
 */
do_action('woocommerce_email_header', $email_heading, $email); ?>

<?php /* translators: %s: Customer first name */ ?>
<p><?php printf(esc_html__('Hi %s,', 'woocommerce'), esc_html($order->get_billing_first_name())); ?></p>
<p><?php esc_html_e('Thanks for your order. It’s on-hold until we confirm that payment has been received. In the meantime, here’s a reminder of what you ordered:', 'woocommerce'); ?></p>

<?php

/*
 * @hooked WC_Emails::order_details() Shows the order details table.
 * @hooked WC_Structured_Data::generate_order_data() Generates structured data.
 * @hooked WC_Structured_Data::output_structured_data() Outputs structured data.
 * @since 2.5.0
 */
do_action('woocommerce_email_order_details', $order, $sent_to_admin, $plain_text, $email);

/*
 * @hooked WC_Emails::order_meta() Shows order meta data.
 */
do_action('woocommerce_email_order_meta', $order, $sent_to_admin, $plain_text, $email);

/*
 * @hooked WC_Emails::customer_details() Shows customer details
 * @hooked WC_Emails::email_address() Shows email address
 */
do_action('woocommerce_email_customer_details', $order, $sent_to_admin, $plain_text, $email);

/**
 * Show user-defined additional content - this is set in each email's settings.
 */
if ($additional_content) {
    echo wp_kses_post(wpautop(wptexturize($additional_content)));
}

/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
do_action('woocommerce_email_footer', $email);
