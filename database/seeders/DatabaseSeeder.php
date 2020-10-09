<?php

namespace Database\Seeders;

use App\Models\ItemList;
use App\Models\ListItem;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $item_lists = ItemList::factory()
            ->count(10)
            ->has(ListItem::factory()->count(5)->state(new Sequence(['completed' => true], ['completed' => false])))
            ->create();
    }
}
