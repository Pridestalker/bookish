<?php

use Timber\Post;
use Timber\Timber;
use App\Bootstrap\Env;
use App\Helpers\Template;

$context         = Timber::get_context();
$post = new Post();
$context['post'] = $post;

$templates = [
    Template::viewHtmlTwigFile(['pages', $post->type()->slug]),
    Template::viewHtmlTwigFile('page'),
];

$caches = [
    Env::getInt('DEFAULT_USER_CACHING', 3600),
    Env::getBool('DEFAULT_ADMIN_CACHING', false)
];

return Timber::render(
    apply_filters('bookish/view-composer/index-page/templates', $templates),
    apply_filters('bookish/view-composer/index-page/context', $context),
    apply_filters('bookish/view/composer/index-page/cache', $caches)
);
