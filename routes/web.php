<?php

use App\Models\ItemList;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/lists/{item_list}', function (ItemList $itemList) {
    return Inertia::render('List', [
        'name' => $itemList->name,
        'items' => $itemList->listItems->map(function ($item) {
            return [
                'id' => $item->id,
                'name' => $item->name,
                'completed' => $item->completed,
            ];
        }),
    ]);
});
