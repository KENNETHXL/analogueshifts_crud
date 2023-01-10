import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';
import { BsArrowRight } from 'react-icons/bs';

export default function Blog({blogs}) {

    return (
        <All>
            <Head title="Blog" />
            <header className="grid justify-center gap-9 text-gray-800 bg-as px-5 py-16 md:py-20">
                <div className='grid justify-between md:grid-cols-2 gap-3'>
                    <div className='grid gap-5 md:p-9'>
                    <div className='grid items-center'> 
                        <h4 className="text-3xl md:text-7xl font-black">Welcome to Our News Page</h4>
                    </div>
                    <div className="flex flex-col gap-9 justify-start items-center md:items-start text-gray-800">
                        <p className='flex items-center text-xl md:leading-loose'>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                        </p>
                        <a href={route('hire.talents')} className='btn-lg bg-black hover:text-yellow-100 hover:ring-2 ring-black'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                        </a>
                    </div>
                    </div>
                    <div className='grid grid-cols-2 justify-center h-full gap-3'>
                        <img src='/images/13.jpg' className='grid justify-center items-center h-full w-80 rounded-lg' alt='' />
                        <div className='grid gap-3'>
                            <img src='/images/14.jpg' className='grid justify-center items-center w-80 rounded-lg' alt='' />
                            <img src='/images/15.jpg' className='grid justify-center items-center w-80 rounded-lg' alt='' />
                        </div>
                    </div>
                </div>
            </header>
            <div className='grid gap-5 justify-center bg-yellow-50 py-16 px-2 md:px-9'>
                <div className='grid gap-5'>
                    <h1 className='flex justify-center text-3xl font-bold'>Our News Post</h1>
                    <form className='flex justify-center gap-3'>
                        <input className='w-full md:w-[500px] p-4 outline-none' placeholder='Search for Article.......'/>
                        <button className='bg-as py-4 px-9 text-white rounded-lg'>Search</button>
                    </form>
                </div>
            
                <div className="home grid md:grid-cols-3">
                    {blogs.map(blog => (
                        <div key={blog.id}>
                            <div className='grid gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-md'>
                                <div className='flex justify-center items-center w-full'>
                                    <img className="w-full h-80 rounded" src={blog.thumbnail} alt=""/>
                                </div>
                                <div className="grid gap-3">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
                                        {blog.title}
                                    </h5>
                                    <p className="font-normal text-gray-700">
                                        {blog.content.slice(0, 150)}...
                                    </p>
                                    <div className="flex justify-between items-end">
                                        <a href={route("blog.show", blog.slug)} className='px-5 py-2 bg-yellow-500 rounded-lg text-white'>Read More</a>
                                        <span className='text-yellow-500'>{new Date(blog.created_at).toDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </All>
    );
}
