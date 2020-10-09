<?php

use App\Models\ListItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('lists/{item_list}/add', function ($list_id) {
    return Response('test', 200);

Route::put('/list-item/{list_item}', function (ListItem $listItem, Request $request) {
    $listItem->completed = $request->input('completed');
    $listItem->save();

    return Redirect::to('/lists/' . $listItem->itemList->id, 303);
});
