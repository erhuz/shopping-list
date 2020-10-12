<?php

namespace App\Http\Controllers;

use App\Models\ItemList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemListController extends Controller
{
    public function create()
    {
        return Inertia::render('CreateList', [
            'name' => now()->format('l, j F Y'),
        ]);
    }

    public function show(ItemList $itemList)
    {
        return Inertia::render('List', [
            'id' => $itemList->id,
            'name' => $itemList->name,
            'items' => $itemList->listItems->map(function ($item) {
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'completed' => $item->completed,
                ];
            }),
        ]);
    }
}
