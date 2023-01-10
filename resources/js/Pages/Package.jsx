import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
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

            <div className="home bg-yellow-50">
                <header className="grid justify-center gap-9 text-gray-800 bg-as px-5 py-16 md:py-20">
                    <div className='grid justify-between md:grid-cols-2 gap-5'>
                        <div className='grid gap-5 md:p-9'>
                            <div className='grid items-center'> 
                                <h4 className="text-3xl md:text-7xl font-black">Premium plans</h4>
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
                <div className='grid md:grid-cols-2 gap-9 md:gap-16 py-16 px-3 md:px-20'>
                    <div className='flex flex-col gap-5 md:pt-16'>
                        <h1 className='text-3xl md:text-7xl font-black'>Simple and transparent pricing</h1>
                        <span className='text-lg'>Straight to the point pricing plans. No surprises or hidden charges. All is clear.</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        <Daily />
                        <Weekly />
                        <Monthly />
                        <Yearly />
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
  }
  
  export default Package;
