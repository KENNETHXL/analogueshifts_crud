import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';

export default function Blog({blogs}) {

    return (
        <All>
            <Head title="Blog" />
            <div className="home grid md:grid-cols-3 py-16 px-2 md:px-9">
                {blogs.map(blog => (
                    <div key={blog.id} className="grid bg-white my-5 rounded-lg border border-gray-200 shadow-md">
                        <div className='flex justify-center items-center w-full p-2'>
                            <img className="w-full h-80 rounded" src={blog.thumbnail} alt=""/>
                        </div>
                        <div className="grid p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {blog.title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700">
                                {blog.content.slice(0, 500)}...
                            </p>
                            <div className="flex justify-between items-end">
                                <a href={route("blog.show", blog.slug)} className='px-5 py-2 bg-yellow-500 rounded-lg'>Read More</a>
                                <span className='text-yellow-500'>{new Date(blog.created_at).toDateString()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </All>
    );
}
