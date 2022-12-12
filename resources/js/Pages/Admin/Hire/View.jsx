import React from 'react';import { Link, Head, usePage } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import {BsArrowRight, BsFolder2Open} from 'react-icons/bs';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Hire({hire}) {

    const auth = usePage().props.auth;

    return (
        <Authenticated>
            <Head title="Hire" />
            <div className='grid justify-center py-16 px-3 md:px-16 '>
                <div className="grid gap-5 bg-yellow-50 p-3 md:p-5 rounded shadow" key={hire.id}>
                    <div className='flex justify-between py-5 px-1'>
                        <ApplicationLogo />
                        {hire.status == '1' ? (
                            <span className='flex text-green-500 text-xs font-bold italic items-start'>Approved</span>
                        ):(
                            <span className='flex text-red-500 text-xs font-bold italic items-start'>Pending Approval</span>
                        )}
                    </div>
                    <span className="text-lg text-zinc-700">
                        Hire request by {hire.name}
                    </span>
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
                    <div className='capitalize'>
                        <span className='text-2xl text-yellow-600 font-medium'>Description:</span>
                        <span className="text-lg text-zinc-700">
                            {hire.description}
                        </span>
                    </div> 
                    <div className='flex justify-between md:justify-end gap-3'>
                        {auth.user.role == 'admin' || auth.user.id == hire.user_id ? (
                            <a href={route("hire.edit", hire.id)} className='btn-lg  md:my-10 bg-black hover:text-yellow-900 hover:ring-2 ring-black'>
                                <h3 className='text-2xl font-medium'>Edit</h3>
                                <BsFolder2Open />
                            </a>
                        ):(
                            null
                        ) }
                            
                        <a href={hire.vet} target='_blank' className='btn-lg  md:my-10 bg-yellow-900 hover:text-yellow-900 hover:ring-2 ring-black'>
                            <h3 className='text-2xl font-medium'>Apply</h3>
                            <BsArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
