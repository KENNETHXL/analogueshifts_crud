import React from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import {BsArrowRight, BsFolder2Open} from 'react-icons/bs';
import ApplicationLogo from '@/Components/ApplicationLogo';


export default function OpenHire({hires}) {
    return (
        <Authenticated>
            <Head title="Welcome" />

            <div className="home py-16 px-2 md:px-12">

                <div className="grid md:grid-cols-3 gap-3">
                
                    {hires.map(hire => (
                        <div className="grid justify-center gap-2 bg-yellow-50 p-5 rounded cursor-pointer md:hover:scale-90 shadow" key={hire.id}>
                            <div className='flex justify-between py-5 px-1'>
                                <ApplicationLogo />
                                <span className='flex text-xs font-bold italic items-end'>Approved</span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-2xl text-yellow-600 font-medium'>Date</h3>
                                <span className="text-lg text-zinc-700">
                                    {new Date(hire.updated_at).toDateString()}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-2xl text-yellow-600 font-medium'>Role:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.role}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-2xl text-yellow-600 font-medium'>Location:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.hire_type}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-2xl text-yellow-600 font-medium'>Salary Range:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.range}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-2xl text-yellow-600 font-medium'>Expirience:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.expirience}
                                </span>
                            </div>
                            <div className='flex gap-3 capitalize'>
                                <h3 className='text-2xl text-yellow-600 font-medium'>Job Duration:</h3>
                                <span className="text-lg text-zinc-700">
                                    {hire.duration}
                                </span>
                            </div>
                            {/* <div className='capitalize'>
                                <span className='text-2xl text-yellow-600 font-medium'>Description:</span>
                                <span className="text-lg text-zinc-700">
                                    {hire.description}
                                </span>
                            </div>  */}
                            <div className='flex gap-2'>
                                <a href={hire.vet} target='_blank' className='btn-lg  md:my-10 bg-black hover:text-yellow-900 hover:ring-2 ring-black'>
                                    <h3 className='text-2xl font-medium'>View</h3>
                                    <BsFolder2Open />
                                </a>
                                <a href={hire.vet} target='_blank' className='btn-lg  md:my-10 bg-yellow-900 hover:text-yellow-900 hover:ring-2 ring-black'>
                                    <h3 className='text-2xl font-medium'>Apply</h3>
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
