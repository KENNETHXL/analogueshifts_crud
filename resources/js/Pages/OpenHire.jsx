import React from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'


export default function OpenHire({hires}) {
    return (
        <Authenticated>
            <Head title="Welcome" />
            <div className="home min-h-screen">

                <div className="home py-16 px-2">

                    <div className="overflow-x-auto py-12 space-y-9 px-3 md:px-12">
                        <div className="grid md:grid-cols-3 gap-3">
                       
                            {hires.map(hire => (
                                <div className="grid justify-center bg-yellow-50 rounded p-5 space-y-5 cursor-pointer md:hover:scale-90 shadow" key={hire.id}>
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
                                    <div className='grid gap-3 capitalize'>
                                        <h3 className='text-2xl text-yellow-600 font-medium'>Description:</h3>
                                        <span className="text-lg text-zinc-700">
                                            {hire.description}
                                        </span>
                                    </div>
                                    {/* <div className='flex gap-3 capitalize'>
                                        <h3 className='text-2xl text-yellow-600 font-medium'>Submitted</h3>
                                        <span className="text-lg text-zinc-700">
                                            {new Date(hire.created_at).toDateString()}
                                        </span>
                                    </div> */}
                                    <a href='mailto:hello@analogueshifts.com' target='_blank' className='btn-lg'>
                                        <h3 className='text-2xl font-medium'>Send Application Email</h3>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>


                </div>
                
            </div>
        </Authenticated>
    );
}
