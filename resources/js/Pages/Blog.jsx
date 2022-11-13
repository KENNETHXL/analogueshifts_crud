import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';

export default function Blog({blogs}) {

    return (
        <All>
            <Head title="Blog" />
            <div className="home py-16 px-2">
                {blogs.map(blog => (
                    <a href='#' key={blog.id} className="grid md:grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md">
                        <div className='grid justify-center items-center p-2'>
                            <img className="w-full h-80 rounded" src={blog.thumbnail} alt=""/>
                        </div>
                        <div className="grid md:col-span-2 p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {blog.title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {blog.content.slice(0, 500)}...
                            </p>
                            <div className="">
                                <a href={route("blog.show", blog.slug)} className='px-5 py-2 bg-yellow-500 rounded-lg'>Read More</a>
                            </div>
                        </div>
                    </a>
                ))}



            </div>
        </All>
    );
}
