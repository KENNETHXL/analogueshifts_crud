import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';

export default function Blog(props) {
    return (
        <All>
            <Head title="Blog" />
            <div className="home">

                
                <a href='#' className="grid md:grid-cols-3 gap-5 bg-white md:h-96 rounded-lg border border-gray-200 shadow-md">
                    <div className='grid justify-center items-center p-2 w-full h-full'>
                        <img className="rounded" src="images/ceo.jpeg" alt=""/>
                    </div>
                    <div className="grid md:col-span-2 p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
               
                
            </div>
        </All>
    );
}
