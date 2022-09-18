import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Create(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="py-12 px-2">
                <div className="min-h-screen max-w-7xl mx-auto px-3 md:px-8 py-8 bg-white">
                    <form className='grid gap-5'>
                        <div className='grid gap-3 p-3 rounded-lg'>
                            <label className='bg-yellow-500 p-3 rounded-lg font-bold text-gray-700 text-xl'>Header information's</label>
                            <div className='grid md:grid-cols-3 gap-5'>
                                <input type={'text'} className='rounded-lg outline-none border-b border-yellow-300' placeholder='Title/Role'/>
                                <input type={'text'} className='rounded-lg outline-none border-b border-yellow-300' placeholder='Price'/>
                                <input type={'text'} className='rounded-lg outline-none border-b border-yellow-300' placeholder='Deadline'/>
                            </div>
                        </div>
                        <label className='bg-yellow-500 p-3 rounded-lg font-bold text-gray-700 text-xl'>Vetting Questions</label>
                        <a href='#'>
                            <p>1. What is the concept of programing ?</p>
                            <div className='grid gap-3 p-3'>
                                <span>A. The book</span>
                                <span>B. The book</span>
                                <span>C. The book</span>
                                <span>D. The book</span>
                            </div>
                        </a>
                    </form>    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
