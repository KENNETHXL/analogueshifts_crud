<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule as ValidationRule;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function __construct()
    {
        return $this->middleware(['auth', 'verified']);
    }

    public function dashboard()
    {
        return Inertia::render('Admin/Blog/Index', [
            "blogs" => Blog::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Blog/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "title" => ['required', 'string', 'min:10', 'max:255', "unique:blogs"],
            "publish" => ['required', 'boolean'],
            "thumbnail" => ['nullable', 'image', "max:500"],
            "content" => ['required', 'string', 'min:50'],
        ]);

        if ($request->file("thumbnail")) {
            $path = $request->file('thumbnail')->storeAs(
                'public/thumbnails',
                $validated["title"].".jpg"
            );

            $validated["thumbnail"] = str_replace("public", "/storage", $path);
        }

        Blog::create([...$validated, "slug" => str_replace(" ", "-", $validated["title"])]);

        return redirect()->route("blog.index");
    }

    public function edit(Blog $blog)
    {
        return Inertia::render('Admin/Blog/Edit', [
            'blog' => $blog,
        ]);
    }

    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            "title" => ['required', 'string', 'min:10', 'max:255', "unique:blogs"],
            "publish" => ['required', 'boolean'],
            "thumbnail" => ['nullable', 'image', "max:500"],
            "content" => ['required', 'string', 'min:50'],
        ]);

        if ($request->file("thumbnail")) {
            $path = $request->file('thumbnail')->storeAs(
                'public/thumbnails',
                $validated["title"] . ".jpg"
            );

            $blog->thumbnail = str_replace("public", "/storage", $path);
        }

        $blog->title = $validated['title'];
        $blog->slug = str_replace(" ", "-", $validated["title"]);
        $blog->publish = $validated['publish'];
        $blog->content = $validated['content'];
        $blog->save();

        return redirect()->route("blog.index");
    }

    public function delete(Blog $blog)
    {
        $blog->delete();
        return redirect()->route("blog.index");
    }
}