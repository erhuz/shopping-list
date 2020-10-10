<?php

use App\Models\ItemList;
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

Route::get('/lists/create', function () {
    return Inertia::render('CreateList', [
        'name' => now()->format('l, j F Y'),
    ]);
});


Route::get('/lists/{item_list}', function (ItemList $itemList) {
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
});

Route::post('/lists', function (Request $request) {
    $list = new ItemList();
    $list->name = $request->input('name');

    $list->save();

    return redirect('/lists/' . $list->id, 303);
});
