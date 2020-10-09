<?php

namespace Database\Factories;

use App\Models\ListItem;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ListItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ListItem::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => Str::random(20),
            'item_list_id' => ItemListFactory::class,
        ];
    }
}
