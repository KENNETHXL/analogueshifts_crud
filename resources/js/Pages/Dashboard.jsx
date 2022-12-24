import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import { GrDiamond, GrUserExpert } from 'react-icons/gr'
import { BiStats } from 'react-icons/bi'
import AdminTab from '@/Layouts/Components/Tabs/AdminTab';
import StaffTab from '@/Layouts/Components/Tabs/StaffTab';
import UserTab from '@/Layouts/Components/Tabs/UserTab';

export default function Dashboard() {
    const auth = usePage().props.auth;

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="min-h-screen py-12">
                <div className="grid gap-3 max-w-7xl mx-auto px-3 md:px-8">
                    <div className="grid md:flex md:justify-between bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {auth.user.role == 'suspend' ? (
                            <div className="flex justify-between md:justify-start items-center gap-2 p-6 text-red-500 border-b border-gray-200">
                                <span>Account Suspended</span>
                                <a className='p-3 underline' href={route('suspend')}>?</a>
                            </div>
                        ):(
                            <div className="p-6 border-b border-gray-200">Welcome Back, We miss you!</div>
                        )}
                        <Link href={route('profile')} className='flex justify-between gap-3 items-center p-2 md:p-0'>
                            <span>{auth?.user?.name}</span>
                            <span className='border rounded-full p-5'>
                                <GrUserExpert className='h-7 w-7 text-gray-700' />
                            </span>
                        </Link>
                    </div>

                    <div className=''>
                        {auth?.user?.role == 'admin' ? (
                            <AdminTab />
                        ):(
                            <>
                                {auth?.user?.role == 'staff' ? (
                                    <StaffTab />
                                ):(
                                    <UserTab />
                                )}
                            </>
                        )}

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
