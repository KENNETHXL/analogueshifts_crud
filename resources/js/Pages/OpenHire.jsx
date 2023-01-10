import React from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import {BsArrowRight, BsFolder2Open} from 'react-icons/bs';


export default function OpenHire(props) {
    return (
        <Authenticated>
            <Head title="Welcome" />

            <div className="home bg-yellow-50">
                <header className="grid justify-center gap-9 text-gray-800 bg-as px-5 py-16 md:py-20">
                    <div className='grid justify-between md:grid-cols-2 gap-5'>
                        <div className='grid gap-5 md:p-9'>
                            <div className='grid items-center'> 
                                <h4 className="text-3xl md:text-7xl font-black">Jobs of your kind are here for you</h4>
                            </div>
                            <div className="flex flex-col gap-9 justify-start items-center md:items-start text-gray-800">
                                <p className='flex items-center text-xl md:leading-loose'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <div className='grid justify-center h-full gap-3'>
                            <img src='/images/16.jpg' className='grid justify-center items-center h-96 rounded-lg' alt='' />
                        </div>
                    </div>
                </header>
                <HiresComp hires={props.hires} />
            </div>
                
        </Authenticated>
    );
}



export function HiresComp({hires}){

    return(
        <div className="grid gap-16 py-16 px-3 md:px-16">
            <div className='grid gap-5'>
                <h1 className='flex justify-center text-3xl font-bold'>Available jobs for you.</h1>
                <form className='flex justify-center gap-3'>
                    <input className='w-full md:w-[500px] p-4 outline-none' placeholder='Search for jobs here.......'/>
                    <button className='bg-as py-4 px-9 text-white rounded-lg'>Search</button>
                </form>
            </div>
            <div className="grid md:grid-cols-3 justify-center gap-5">
                {hires.map(hire => (
                    <div className="grid gap-2 bg-white p-5 rounded shadow" key={hire.id}>
                        <div className='flex justify-between py-5 px-1'>
                            <img src={hire.logoURL} alt={hire.companyName} className='h-9 w-9' />
                            {hire.status == '1' ? (
                                <span className='flex text-green-500 text-xs font-bold italic items-start'>Approved</span>
                            ):(
                                <span className='flex text-red-500 text-xs font-bold italic items-start'>Pending Approval</span>
                            )}
                        </div>
                        <div className='flex gap-3 capitalize'>
                            {/* <h3 className='text-lg text-yellow-600 font-medium'>Posted</h3> */}
                            <span className="text-lg text-yellow-500">
                            Posted {new Date(hire.updated_at).toDateString()}
                            </span>
                        </div>
                        <div className='flex gap-3 capitalize'>
                            {/* <h3 className='text-lg text-yellow-600 font-medium'>Role:</h3> */}
                            <span className="text-lg text-zinc-700">
                                {hire.role}
                            </span>
                        </div>
                        <div className='grid gap-3 capitalize'>
                            {/* <h3 className='text-lg text-yellow-600 font-medium'>Job Description:</h3> */}
                            <span className="text-lg text-zinc-700">
                                {hire.description.slice(0, 100)}...
                            </span>
                        </div>
                        <div className='flex gap-2 pt-3'>
                            <a href={route("hire.view", hire.slug)} className='flex justify-center w-full text-white items-center gap-3 rounded-lg py-3 px-5 bg-yellow-900 hover:bg-transparent hover:text-yellow-900 hover:ring-2 ring-black'>
                                <h3 className='text-lg'>Proceed for job description</h3>
                                <BsArrowRight />
                            </a>
                        </div>
                    </div>
                ))}
                {/* {hires.links()} */}
            </div>
        </div>
    )
}
