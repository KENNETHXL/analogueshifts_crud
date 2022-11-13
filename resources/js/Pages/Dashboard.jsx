import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { GrDiamond, GrUserExpert } from 'react-icons/gr'
import { BiStats } from 'react-icons/bi'

export default function Dashboard(props) {
    const auth = usePage().props.auth;

    return (
        <AuthenticatedLayout
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="min-h-screen py-12">
                <div className="grid gap-3 max-w-7xl mx-auto px-3 md:px-8">
                    <div className="grid md:flex md:justify-between bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Welcome Back, We miss you!</div>
                        <Link href={route('profile')} className='flex justify-between gap-3 items-center p-2 md:p-0'>
                            <span>{auth?.user?.name}</span>
                            <span className='border rounded-full p-5'>
                                <GrUserExpert className='h-7 w-7 text-gray-700' />
                            </span>
                        </Link>
                    </div>

                    <div className='grid gap-3'>
                        {auth?.user?.role == 'admin' ? (
                            <div className='grid  md:grid-cols-3 grid-cols-2 justify-between gap-2'>
                                <Link href={route('learn.index')} className='flex justify-between gap-3 items-center p-2 md:p-0'>
                                    <span className='border rounded-full p-5'>
                                        Learn Dashboard
                                    </span>
                                </Link>
                                <Link href={route('blog.index')} className='flex justify-between gap-3 items-center p-2 md:p-0'>
                                    <span className='border rounded-full p-5'>
                                        Blog Dashboard
                                    </span>
                                </Link>
                            </div>
                        ):(
                            null
                        )}

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
