<?php


namespace App\Controllers\Hooks\Actions;

class Init extends Action
{
    public function action()
    {
        $this->remove_all_image_sizes();
    }

    protected function remove_all_image_sizes()
    {
        foreach (get_intermediate_image_sizes() as $size) {
            remove_image_size($size);
        }
    }

    public function parameterCount(): int
    {
        return 1;
    }
}
