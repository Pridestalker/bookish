<?php

namespace App\Bootstrap;

defined('ABSPATH') || exit(0);

use Dotenv\Dotenv;
use App\Helpers\WP;

class Env implements Bootstrapper
{
    protected static ?Env $_instance = null;
    /**
     * @var Dotenv|null
     */
    protected ?Dotenv $env = null;

    public static function get($name, $default = '', $type = null)
    {
        static::bootstrap();

        if ($type === null) {
            return getenv($name)?? $default;
        }

        switch ($type) {
            case 'int':
            case 'integer':
            case 'number':
            case 'num':
                return (int) (getenv($name)?? $default);
            case 'bool':
            case 'boolean':
                return filter_var((getenv($name)?? $default), FILTER_VALIDATE_BOOLEAN);
            default:
                return getenv($name)?? $default;
        }
    }

    public static function getInt($name, $default = 0)
    {
        return static::get($name, $default, 'integer');
    }

    public static function getBool($name, $default = false)
    {
        return static::get($name, $default, 'boolean');
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
