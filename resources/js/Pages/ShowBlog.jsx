import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';

export default function Blog({blog}) {

    return (
        <All>
            <Head title="Blog" />
            <article className="prose prose-stone max-w-none dark:prose-invert lg:prose-xl home py-16 px-2 space-y-5">

                <img className="w-full" src={blog.thumbnail} alt=""/>

                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                </h5>

                <p className="mb-3 text-xl font-normal text-gray-700 leading-10 dark:text-gray-400">
                    {blog.content}
                </p>

            </article>
        </All>
    );
}
