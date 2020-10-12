<?php

use App\Http\Controllers\ItemListController;
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
    ->name('lists.create');

Route::get('/lists/{item_list}', [ItemListController::class, 'show'])
    ->name('lists.show');


Route::post('/lists', function (Request $request) {
    $list = new ItemList();
    $list->name = $request->input('name');

    $list->save();

    return redirect('/lists/' . $list->id, 303);
});

Route::post('/item-lists/{item_list}/list-item', function (ItemList $itemList, Request $request) {

    $item = new ListItem();
    $item->name = $request->input('name');

    $itemList->listItems()->save($item);

    return Redirect::to('/lists/' . $itemList->id, 303);
});

Route::delete('/list-item/{list_item}', function (Listitem $listItem, Request $request) {

    // TODO

    $id = $listItem->itemList->id;

    $listItem->delete();

    return Redirect::to('/lists/' . $id, 303);
});

Route::put('/list-item/{list_item}', function (ListItem $listItem, Request $request) {
    $listItem->completed = $request->input('completed');
    $listItem->save();

    return Redirect::to('/lists/' . $listItem->itemList->id, 303);
});

