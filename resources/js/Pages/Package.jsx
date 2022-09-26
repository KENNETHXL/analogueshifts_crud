import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import { GrDiamond, GrUserExpert } from 'react-icons/gr'
import Daily from './Packages/Daily';
import Weekly from './Packages/Weekly';
import Monthly from './Packages/Monthly';
import Yearly from './Packages/Yearly';


  function Package(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Package" />

            <div className="min-h-screen py-12">
                <div className='flex justify-between gap-3 items-center bg-yellow-300 font-bold text-xl p-3 m-5 rounded-lg'>
                    <span>Premium</span>
                    <span className='border rounded-full p-5'>
                        <GrDiamond className='h-7 w-7 text-gray-700' />
                    </span>
                </div>
                <div className="grid md:grid-cols-4 gap-3 max-w-7xl mx-auto px-3 md:px-8">
                    <Daily />
                    <Weekly />
                    <Monthly />
                    <Yearly />
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
  }
  
  export default Package;
