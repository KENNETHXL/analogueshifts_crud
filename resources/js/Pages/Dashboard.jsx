import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import { GrDiamond, GrUserExpert } from 'react-icons/gr'
import { BiStats } from 'react-icons/bi'

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="min-h-screen py-12">
                <div className="grid gap-3 max-w-7xl mx-auto px-3 md:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Welcome Back, We miss you!</div>
                    </div>

                    <div className='grid md:grid-cols-3 gap-3 md:justify-between'>
                        <Link href={route('profile')} className='flex justify-between gap-3 items-center bg-blue-300 p-3 rounded-lg'>
                            <span>Profile</span>
                            <span className='border rounded-full p-5'>
                                <GrUserExpert className='h-7 w-7 text-gray-700' />
                            </span>
                        </Link>
                        {/* {props.auth.user.type === admin ? ( */}
                            <Link href={route('profile')} className='flex justify-between gap-3 items-center bg-green-300 p-3 rounded-lg'>
                                <span>Admin</span>
                                <span className='border rounded-full p-5'>
                                    <BiStats className='h-7 w-7 text-gray-700' />
                                </span>
                            </Link>
                        {/* ):(
                            <Link href={route('profile')} className='flex justify-between gap-3 items-center bg-green-300 p-3 rounded-lg'>
                                <span>Vetting</span>
                                <span className='border rounded-full p-5'>
                                    <BiStats className='h-7 w-7 text-gray-700' />
                                </span>
                            </Link>
                        )} */}
                        <Link href={route('package')} className='flex justify-between gap-3 items-center bg-yellow-300 p-3 rounded-lg'>
                            <span>Premium</span>
                            <span className='border rounded-full p-5'>
                                <GrDiamond className='h-7 w-7 text-gray-700' />
                            </span>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
