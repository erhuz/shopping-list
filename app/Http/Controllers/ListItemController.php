<?php

namespace App\Http\Controllers;

use App\Models\ItemList;
use App\Models\ListItem;
use Illuminate\Http\Request;

class ListItemController extends Controller
{
    public function store(ItemList $itemList, Request $request)
    {
        $item = new ListItem();
        $item->name = $request->input('name');

        $itemList->listItems()->save($item);

        return redirect()->route('item_lists.show', [$itemList], 303);
    }

    public function destroy(ListItem $listItem)
    {
        $itemList = $listItem->itemList;
        $listItem->delete();

        return redirect()->route('item_lists.show', [$itemList], 303);
    }
}
