<?php
use Timber\Timber;

include_once get_stylesheet_directory() . '/vendor/autoload.php';

add_theme_support('custom-logo');
add_theme_support('woocommerce');
add_theme_support('html5');

Timber::$locations = [
    get_stylesheet_directory() . '/templates/',
];

add_action('phpmailer_init', 'send_smtp_email');
/**
 * @param PHPMailer $phpmailer
 */
function send_smtp_email($phpmailer)
{
    $phpmailer->isSMTP();
    $phpmailer->Host       = 'sendmailhog';
    $phpmailer->Port       = 1025;
    $phpmailer->Username   = null;
    $phpmailer->Password   = null;
    $phpmailer->SMTPSecure = null;
}
