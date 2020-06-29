<?php

use Timber\Timber;

defined('ABSPATH') || exit(0);

include_once get_stylesheet_directory() . '/vendor/autoload.php';

add_theme_support('custom-logo');
add_theme_support('woocommerce');
add_theme_support('html5');

Timber::$locations = [
    get_stylesheet_directory() . '/templates/',
];
