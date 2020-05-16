<?php

namespace App\Bootstrap;

use Dotenv\Dotenv;
use App\Helpers\WP;

class Env implements Bootstrapper
{
    protected static $_instance = null;
    /**
     * @var Dotenv|null
     */
    protected $env = null;

    public static function get($name, $default = '')
    {
        static::bootstrap();

        return getenv($name)?? $default;
    }

    public function __construct()
    {
        $this->env = Dotenv::createMutable(WP::getStylesheetDir());
        $this->env->load();
    }

    public static function bootstrap(): self
    {
        if (static::$_instance === null) {
            static::$_instance = new static();
        }

        return static::$_instance;
    }
}
