import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';
import { BsArrowRight } from 'react-icons/bs';

export default function Blog({blogs}) {

    return (
        <All>
            <Head title="Contact" />
            <header className="grid gap-9 text-gray-800 bg-as px-5 py-16 md:py-20">
                <div className='grid justify-between md:grid-cols-2 gap-3'>
                    <div className='grid justify-start gap-5 md:p-9'>
                        <div className='grid items-start'> 
                            <h4 className="text-3xl md:text-7xl font-black">Contact Us</h4>
                        </div>
                        <div className="flex flex-col gap-9 justify-start items-center md:items-start text-gray-800">
                            <p className='flex items-center text-xl md:leading-loose'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    <div className='grid justify-center h-full gap-3'>
                        <img src='/images/17.jpg' className='grid justify-center items-center h-96 rounded-lg' alt='' />
                    </div>
                </div>
            </header>
            <div className='grid justify-center bg-yellow-50 py-16 px-2 md:px-9'>
                <div className="home grid md:grid-cols-2 p-3 md:p-16">
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl md:text-7xl font-black'>Get in Touch</h1>
                        <span className='text-xl xt-3xl'>Have any question or feedback, feel free to reach out to us. We are always available to help.</span>
                    </div>
                    <form className='flex flex-col gap-7'>
                        <div className='grid md:grid-cols-2 gap-7'>
                            <div className='grid gap-2'>
                                <label>First Name</label>
                                <input className='w-full border border-as p-3 rounded'/>
                            </div>
                            <div className='grid gap-2'>
                                <label>Last Name</label>
                                <input className='w-full border border-as p-3 rounded'/>
                            </div>
                            <div className='grid gap-2'>
                                <label>Email Address</label>
                                <input className='w-full border border-as p-3 rounded'/>
                            </div>
                            <div className='grid gap-2'>
                                <label>Phone Number</label>
                                <input className='w-full border border-as p-3 rounded'/>
                            </div>
                        </div>
                        <div className='grid gap-2'>
                            <label>Message</label>
                            <textarea className='h-56 w-full border border-as p-3 rounded'/>
                        </div>
                        <div>
                            <button className='bg-as py-3 px-16 text-white rounded'>Send Message</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </All>
    );
}
