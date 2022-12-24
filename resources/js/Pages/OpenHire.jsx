import React from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import {BsArrowRight, BsFolder2Open} from 'react-icons/bs';
import ApplicationLogo from '@/Components/ApplicationLogo';


export default function OpenHire({hires, hiresPending}) {
    return (
        <Authenticated>
            <Head title="Welcome" />

            <div className="home">

                <div className="grid md:grid-cols-3 justify-center gap-3 py-16 px-2 md:px-9">
                
                    {hires.map(hire => (
                        <div className="grid justify-center gap-2 bg-yellow-50 p-5 rounded shadow" key={hire.id}>
                            <div className='flex justify-between py-5 px-1'>
                                <ApplicationLogo />
                                {hire.status == '1' ? (
                                    <span className='flex text-green-500 text-xs font-bold italic items-start'>Approved</span>
                                ):(
                                    <span className='flex text-red-500 text-xs font-bold italic items-start'>Pending Approval</span>
                                )}
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-lg text-yellow-600 font-medium'>Date</h3>
                                <span className="text-lg text-zinc-700">
                                    {new Date(hire.updated_at).toDateString()}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-lg text-yellow-600 font-medium'>Role:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.role}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-lg text-yellow-600 font-medium'>Location:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.hire_type}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-lg text-yellow-600 font-medium'>Salary Range:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.range}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-lg text-yellow-600 font-medium'>Expirience:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.expirience}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-lg text-yellow-600 font-medium'>Job Duration:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.duration}
                                </span>
                            </div>
                            <div className='flex gap-2 pt-3'>
                                <a href={route("hire.view", hire.id)} className='flex justify-center w-full text-white items-center gap-3 rounded-lg py-3 px-5 bg-black hover:bg-transparent hover:text-yellow-900 hover:ring-2 ring-black'>
                                    <h3 className='text-lg'>View</h3>
                                    <BsFolder2Open />
                                </a>
                                <a href={hire.vet} target='_blank' className='flex justify-center w-full text-white items-center gap-3 rounded-lg py-3 px-5 bg-yellow-900 hover:bg-transparent hover:text-yellow-900 hover:ring-2 ring-black'>
                                    <h3 className='text-lg'>Apply</h3>
                                    <BsArrowRight />
                                </a>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
                
        </Authenticated>
    );
}
