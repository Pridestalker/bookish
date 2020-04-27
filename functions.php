<?php
use Timber\Timber;

include_once get_stylesheet_directory() . '/vendor/autoload.php';

add_theme_support('custom-logo', [
	'width' => 150,
	'height' => 90
]);
add_theme_support('woocommerce');
add_theme_support('html5');

Timber::$locations = [
    get_stylesheet_directory() . '/templates/',
];

function remove_all_image_sizes() {
	foreach ( get_intermediate_image_sizes() as $size ) {
		remove_image_size( $size );
	}
}

add_action('init', 'remove_all_image_sizes');
