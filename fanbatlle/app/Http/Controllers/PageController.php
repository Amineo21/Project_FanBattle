<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');  // "Home" est le nom de votre composant React
    }
}
