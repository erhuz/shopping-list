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

        $itemList = new ItemList();
        $itemList->name = 'Ica på Lördag';
        $itemList->save();

        $listItems = [
            new ListItem(['name' => 'Mjölk', 'completed' => false]),
            new ListItem(['name' => 'Yoghurt', 'completed' => false]),
            new ListItem(['name' => 'Chips', 'completed' => false]),
            new ListItem(['name' => 'Dip', 'completed' => false]),
            new ListItem(['name' => 'Farts', 'completed' => false]),
        ];

        $itemList->listItems()->saveMany($listItems);

        $item_lists = ItemList::factory()
            ->count(10)
            ->has(ListItem::factory()->count(5)->state(new Sequence(['completed' => true], ['completed' => false])))
            ->create();
    }
}
