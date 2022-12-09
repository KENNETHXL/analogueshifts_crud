<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\HireTalent;
use App\Models\Hire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Inertia\Inertia;

class HireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {
        return Inertia::render('OpenHire', [
            "hires" => Hire::all(),
        ]);
        
    }

    public function index()
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Hire/Index', [
                "hires" => Hire::all(),
            ]);
        }
        return redirect()->route("hire.talents");
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Hire');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:5', 'max:50'],
            'email' => ['required', 'string', 'min:1', 'max:50', 'email'],
            'tel' => ['required', 'string', 'min:3', 'max:20'],
            'role' => ['required', 'string', 'min:1', 'max:50'],
            'hire_type' => ['required', 'string', 'min:3', 'max:50'],
            'range' => ['required', 'string', 'min:1', 'max:50'],
            'expirience' => ['required', 'string', 'min:5', 'max:50'],
            'duration' => ['required', 'string', 'min:5', 'max:255'],
            'description' => ['required', 'string', 'min:10', 'max:500'],
        ]);

        Hire::create([
            // 'user_id' => auth()->id(),
            "name" => $validated['name'],
            "email" => $validated['email'],
            "tel" => $validated['tel'],
            "role" => $validated['role'],
            "hire_type" => $validated['hire_type'],
            "range" => $validated['range'],
            "expirience" => $validated['expirience'],
            "duration" => $validated['duration'],
            "description" => $validated['description'],


        ]);

        $user = auth()->user();
        $data = array(
            'name' => $user->name,
            'email' => $user->email,
            'tel' => $validated['tel'],
            "role" => $validated['role'],
            "hire_type" => $validated['hire_type'],
            "range" => $validated['range'],
            "expirience" => $validated['expirience'],
            "duration" => $validated['duration'],
            'description' => $validated['description'],
        );

        
        Mail::to('tesimune@gmail.com')
        // ->cc('support@analogueshifts.com')
        // ->bcc('Kennethmalaka@gmail.com')
        ->send(new HireTalent($data));

        return redirect()->route("dashboard");

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Hire $hire)
    {
        return Inertia::render("Admin/Hire/View", [
            "hire" => $hire,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // return Inertia::render('Talents');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Hire $hire)
    {
        $hire->delete();
        return redirect()->route("hire.index");
    }
}
