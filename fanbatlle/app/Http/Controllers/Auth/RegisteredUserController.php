<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'birthday' => 'required|date', // Validation de la date
            'country' => 'required|string|max:255',
            'is_admin' => 'nullable|boolean', // si c'est un champ optionnel
        ]);
    
        // Assure-toi que la date est bien formatée au format YYYY-MM-DD avant d'enregistrer
        $birthday = Carbon::parse($data['birthday'])->format('Y-m-d'); // Utilisation de Carbon pour formater la date
    
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'date_of_birth' => $birthday, // Enregistrer la date formatée
            'country' => $data['country'],
            'is_admin' => $data['is_admin'] ?? 0, // Valeur par défaut de 0
        ]);
    
        return redirect()->route('login')->with('success', 'User registered successfully');
    }
    
    
}
