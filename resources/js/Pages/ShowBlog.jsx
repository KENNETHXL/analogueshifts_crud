import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { AiOutlineShareAlt } from 'react-icons/ai'
import All from '@/Layouts/AllLayout';

export default function Blog({blog}) {

    const url = window.location.href


    return (
        <All>
            <Head title="Blog" />
            <div className='home grid py-16 px-2 md:px-48 space-y-5'>
                <article className="prose prose-stone max-w-none lg:prose-xl">
                    <div  className="grid bg-white rounded-lg border border-gray-200 shadow-md">
                        <div className='grid justify-center items-center w-full p-2'>
                            <img className="w-full rounded" src={blog.thumbnail} alt=""/>
                        </div>
                        <div className="grid p-5 md:p-16">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {blog.title}
                            </h5>
                            <p className="grid justify-between mb-3 font-normal text-gray-700">
                                {blog.content}
                            </p>
                            <div className='grid justify-end'>
                                <CopyToClipboard className='px-5 py-2 bg-yellow-500 rounded-lg' text={url}>
                                    <button onClick={() => alert("Link copied")}>
                                        <AiOutlineShareAlt />
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </article>
                
            </div>
        </All>
    );
}
