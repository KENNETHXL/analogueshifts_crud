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
            <div className='home bg-yellow-50 py-16 px-3 md:px-16'>
                <div className='grid md:grid-cols-7 gap-5 space-y-5'>
                    <article className="grid md:col-span-5">
                        <div  className="grid gap-5">
                            <img className="h-80 md:h-[400px] w-full rounded" src={blog.thumbnail} alt=""/>
                            <div className="grid">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {blog.title}
                                </h5>
                                <p className="grid justify-between mb-3 font-normal text-gray-700">
                                    {blog.content}
                                </p>
                                {/* <div className='grid justify-end'>
                                    <CopyToClipboard className='px-5 py-2 bg-yellow-500 rounded-lg' text={url}>
                                        <button onClick={() => alert("Link copied")}>
                                            <AiOutlineShareAlt />
                                        </button>
                                    </CopyToClipboard>
                                </div> */}
                            </div>
                        </div>
                    </article>
                    <div className='hidden md:block md:col-span-2'>
                        <div className='grid gap-5'>
                            <h1 className='flex  text-3xl font-bold'>Related Post</h1>
                            <form className='flex justify-center gap-3'>
                                <input className='w-full p-4 outline-none' placeholder='Search for Article.......'/>
                                <button className='bg-as py-4 px-9 text-white rounded-lg'>Search</button>
                            </form>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </All>
    );
}
