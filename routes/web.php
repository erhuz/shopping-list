<?php

use App\Http\Controllers\ItemListController;
use App\Http\Controllers\ListItemController;
use App\Models\ItemList;
use App\Models\ListItem;
use Illuminate\Http\Request;
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

Route::get('/home', function () {
    return Inertia::render('Home', [
        'lists' => ItemList::all()->map(function ($list) {
           return [
               'id' => $list->id,
               'name' => $list->name,
           ];
        }),
    ]);
});

Route::get('/lists/create', [ItemListController::class, 'create'])
    ->name('item_lists.create');

Route::get('/lists/{item_list}', [ItemListController::class, 'show'])
    ->name('item_lists.show');

Route::post('/lists', [ItemListController::class, 'store'])
    ->name('item_lists.store');

Route::post('/lists/{item_list}/items', [ListItemController::class, 'store'])
    ->name('list_items.store');

Route::delete('/items/{list_item}', [ListItemController::class, 'destroy'])
    ->name('list_items.destroy');

Route::put('/items/{list_item}', [ListItemController::class, 'update'])
    ->name('list_items.update');
