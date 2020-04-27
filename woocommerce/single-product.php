<?php

use Timber\Post;
use Timber\Timber;
use App\Helpers\Woo;
use App\Helpers\Template;

defined('ABSPATH') || exit(0);

$context = Timber::get_context();
$context['post'] = new Post();

Woo::setProductView($context['post']->id);

$templates = [
	Template::viewHtmlTwigFile('woo/single-product/specific/'. $context['post']->slug),
	Template::viewHtmlTwigFile('woo/single-product/main'),
	Template::viewHtmlTwigFile('page'),
];

Timber::render(
	apply_filters('bookish/view-composer/single-product/templates', $templates),
	apply_filters('bookish/view-composer/single-product/context', $context),
	apply_filters('bookish/view-composer/single-product/cache', [600, false])
);

\App\Helpers\Cookie::setLastViewedProduct($context['post']->id);

		/**
		 * woocommerce_before_main_content hook.
		 *
		 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
		 * @hooked woocommerce_breadcrumb - 20
		 */
		do_action( 'woocommerce_before_main_content' );
	?>

		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>

			<?php wc_get_template_part( 'content', 'single-product' ); ?>

		<?php endwhile; // end of the loop. ?>

	<?php
		/**
		 * woocommerce_after_main_content hook.
		 *
		 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
		 */
		do_action( 'woocommerce_after_main_content' );
	?>

	<?php
		/**
		 * woocommerce_sidebar hook.
		 *
		 * @hooked woocommerce_get_sidebar - 10
		 */
		do_action( 'woocommerce_sidebar' );
	?>

<?php
get_footer( 'shop' );

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
