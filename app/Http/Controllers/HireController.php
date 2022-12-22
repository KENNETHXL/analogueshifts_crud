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
            "hires" => Hire::where('display', '1')->latest()->get(),
            // "hires" => Hire::latest()->get(),
        ]);
    }

    public function myhire()
    {
        return Inertia::render('MyHire', [
            "hires" => Hire::where('user_id', auth()->user()->id)->latest()->get(),
        ]);
    }

    public function index()
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Hire/Index', [
                "hires" => Hire::latest()->get(),
            ]);
        }elseif (auth()->user()->role == 'staff') {
            return Inertia::render('Admin/Hire/Index', [
                "hires" => Hire::latest()->get(),
            ]);
        }
        return redirect()->route("hire.apply");
        
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
            'display' => ['string', 'max:50'],
            'name' => ['required', 'string', 'min:5', 'max:50'],
            'email' => ['required', 'string', 'min:1', 'max:50', 'email'],
            'tel' => ['required', 'string', 'min:3', 'max:20'],
            'role' => ['required', 'string', 'min:1', 'max:50'],
            'vet' => ['required', 'string', 'min:1', 'max:50'],
            'hire_type' => ['required', 'string', 'min:3', 'max:50'],
            'range' => ['required', 'string', 'min:1', 'max:50'],
            'expirience' => ['required', 'string', 'min:5', 'max:50'],
            'duration' => ['required', 'string', 'min:5', 'max:255'],
            'description' => ['required', 'string', 'min:10', 'max:500'],
        ]);

        Hire::create([
            'user_id' => auth()->id(),
            "display" => $validated['display'],
            "name" => $validated['name'],
            "email" => $validated['email'],
            "tel" => $validated['tel'],
            "role" => $validated['role'],
            "hire_type" => $validated['hire_type'],
            "range" => $validated['range'],
            "expirience" => $validated['expirience'],
            "duration" => $validated['duration'],
            "vet" => $validated['vet'],
            "description" => $validated['description'],


        ]);

        $user = auth()->user();
        $data = array(
            "name" => $validated['name'],
            "email" => $validated['email'],
            "tel" => $validated['tel'],
            "role" => $validated['role'],
            "hire_type" => $validated['hire_type'],
            "range" => $validated['range'],
            "expirience" => $validated['expirience'],
            "duration" => $validated['duration'],
            "vet" => $validated['vet'],
            'description' => $validated['description'],
        );

        
        Mail::to('hello@analogueshifts.com')
        ->cc('support@analogueshifts.com')
        ->bcc('Kennethmalaka@gmail.com')
        ->send(new HireTalent($data));

        if (auth()->user()->role == 'admin'){
            return redirect()->route("hire.index");
        }
        return redirect()->route("hire.myhire");

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
    public function edit(Hire $hire)
    {
        if (auth()->user()->role == 'admin' ){
            return Inertia::render('Admin/Hire/Edit', [
                'hire' => $hire,
            ]);
        }elseif (auth()->user()->role == 'staff') {
            return Inertia::render('Admin/Hire/Edit', [
                'hire' => $hire,
            ]);
        }elseif (auth()->user()->id == $hire->user_id) {
            return Inertia::render('Admin/Hire/Edit', [
                'hire' => $hire,
            ]);
        }
        return redirect()->route("hire.myhire");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hire $hire)
    {
        $validated = $request->validate([
            'display' => ['required', 'string', 'max:50'],
            'status' => ['required', 'string', 'max:50'],
            'name' => ['required', 'string', 'min:5', 'max:50'],
            'email' => ['required', 'string', 'min:1', 'max:50', 'email'],
            'tel' => ['required', 'string', 'min:3', 'max:20'],
            'role' => ['required', 'string', 'min:1', 'max:50'],
            'vet' => ['required', 'string', 'min:1', 'max:50'],
            'hire_type' => ['required', 'string', 'min:3', 'max:50'],
            'range' => ['required', 'string', 'min:1', 'max:50'],
            'expirience' => ['required', 'string', 'min:5', 'max:50'],
            'duration' => ['required', 'string', 'min:5', 'max:255'],
            'description' => ['required', 'string', 'min:10', 'max:500'],
        ]);

            $hire->display = $validated['display'];
            $hire->status = $validated['status'];
            $hire->name = $validated['name'];
            $hire->email = $validated['email'];
            $hire->tel = $validated['tel'];
            $hire->role = $validated['role'];
            $hire->hire_type = $validated['hire_type'];
            $hire->range = $validated['range'];
            $hire->expirience = $validated['expirience'];
            $hire->duration = $validated['duration'];
            $hire->vet = $validated['vet'];
            $hire->description = $validated['description'];
            $hire->save();

            if (auth()->user()->role == 'admin'){
                return redirect()->route("hire.index");
            }
            return redirect()->route("hire.myhire");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Hire $hire)
    {
        if (auth()->user()->role == 'admin'){
            $hire->delete();
            return redirect()->route("hire.index");
        }elseif (auth()->user()->role == 'staff') {
            $hire->delete();
            return redirect()->route("hire.index");
        }elseif (auth()->user()->id == $hire->user_id) {
            $hire->delete();
            return redirect()->route("hire.index");
        }
        return redirect()->route("hire.apply");
    }
}
