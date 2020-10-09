<?php

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

Route::get('/helloworld', function () {

    $items = [
        [
          'id' => 1,
          'name' => 'Mjölk',
          'completed' => false,
        ],
        [
            'id' => 2,
            'name' => 'Yoghurt',
            'completed' => true,
        ],
    ];

    return Inertia::render('List', [
        'items' => $items,
    ]);
});
