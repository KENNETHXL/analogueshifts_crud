<?php

namespace App\Http\Controllers;

use App\Models\Learn;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class LearnController extends Controller
{

    public function __construct()
    {
        return $this->middleware(['auth', 'verified'])
            ->except(['all', 'show']);
    }

    public function all()
    {
        return Inertia::render("Learn", [
            "learns" => Learn::latest()->get()
        ]);
    }

    public function dashboard()
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Learn/Index', [
                "learns" => Learn::latest()->get(),
            ]);
        }
        return redirect()->route("learn.all");
        
    }

    public function create()
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Learn/Create');
        }
        return redirect()->route("learn.all");
        
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "title" => ['required', 'string', 'min:10', 'max:255', "unique:learns"],
            "url" => ['required', 'string', "unique:learns"],
            "tag" => ['required', 'string', 'min:3', 'max:50'],
            "description" => ['required', 'string', 'min:50', 'max:500'],
        ]);

        Learn::create([...$validated, "slug" => str_replace(" ", "-", $validated["title"])]);

        return redirect()->route("learn.index");
    }

    public function edit(Learn $learn)
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Learn/Edit', [
                'learn' => $learn,
            ]);
        }
        return redirect()->route("learn.all");

    }

    public function update(Request $request, Learn $learn)
    {
        $validated = $request->validate([
            "title" => ['required', 'string', 'min:10', 'max:255', Rule::unique("learns")->ignore($learn)],
            "url" => ['required', 'string', Rule::unique("learns")->ignore($learn)],
            "tag" => ['required', 'string', 'min:3', 'max:50'],
            "description" => ['required', 'string', 'min:50', 'max:500'],
        ]);

        $learn->title = $validated['title'];
        $learn->slug = str_replace(" ", "-", $validated["title"]);
        $learn->tag = $validated['tag'];
        $learn->url = $validated['url'];
        $learn->description = $validated['description'];
        $learn->save();

        return redirect()->route("learn.index");
    }

    public function delete(Learn $learn)
    {
        $learn->delete();
        return redirect()->route("learn.index");
    }
}