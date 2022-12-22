<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class AllController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Users/Index', [
                "users" => User::latest()->get(),
            ]);
        }elseif (auth()->user()->role == 'staff') {
            return Inertia::render('Admin/Users/Index', [
                "users" => User::latest()->get(),
            ]);
        }
        return redirect()->route("dashboard");

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Users/Edit', [
                'user' => $user,
            ]);
        }
        elseif (auth()->user()->role == 'staff'){
            return Inertia::render('Admin/Users/Edit', [
                'user' => $user,
            ]);
        }        
        return redirect()->route("dashboard");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'role' => ['required', 'string', 'max:50'],
        ]);

            $user->role = $validated['role'];
            $user->save();
            return redirect()->route("users");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if (auth()->user()->role == 'admin'){
            $user->delete();
            return redirect()->route("users");
        }elseif (auth()->user()->role == 'staff'){
            $user->delete();
            return redirect()->route("users");
        }        
        return redirect()->route("dashboard");
    }
}
