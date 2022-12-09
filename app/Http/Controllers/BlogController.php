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
        return $this->middleware(['auth', 'verified'])
            ->except(["all", 'show']);
    }

    public function all()
    {
        return Inertia::render("Blog", [
            "blogs" => Blog::latest()->get(),
        ]);
    }

    public function show(Blog $blog)
    {
        return Inertia::render("ShowBlog", [
            "blog" => $blog,
        ]);
    }

    public function dashboard()
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Blog/Index', [
                "blogs" => Blog::all(),
            ]);
        }        
        return redirect()->route("blogs");

    }

    public function create()
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Blog/Create');
        }
        return redirect()->route("blogs");
        
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
                str_replace(" ", "-", $validated["title"]) . ".jpg"
            );

            $validated["thumbnail"] = str_replace("public", "/storage", $path);
        }

        Blog::create([...$validated, "slug" => str_replace(" ", "-", $validated["title"])]);

        return redirect()->route("blog.index");
    }

    public function edit(Blog $blog)
    {
        if (auth()->user()->role == 'admin'){
            return Inertia::render('Admin/Blog/Edit', [
                'blog' => $blog,
            ]);
        }
        return redirect()->route("blogs");
        
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
                str_replace(" ", "-", $validated["title"]). ".jpg"
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