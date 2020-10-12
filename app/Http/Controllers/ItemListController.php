<?php

namespace App\Http\Controllers;

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
}
