import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Create(props) {
    return (
        <Authenticated>
            <Head title="Blog" />
            <div className="home py-16 px-2">

                
                <form className="grid gap-2 bg-white p-2 md:p-9 rounded-lg border border-gray-200 shadow-md">
                    <label className='text-2xl font-bold text-yellow-500'>Create New</label>
                    <div className='grid gap-3'>
                        <input type='file' placeholder='URL here' className='rounded-lg p-3'/>
                        <input type='text' placeholder='Title here' className='rounded-lg p-3'/>
                        <textarea className='rounded-lg p-3 h-80' placeholder='Blog Content'></textarea>
                    </div>
                    <div className='flex justify-between items-center gap-9'>
                        <div className='flex justify-center items-center gap-3'>
                            <input type='checkbox' placeholder='Publish' className='rounded-lg p-3'/>
                            <label>Publish</label>
                        </div>
                        <button className='flex justify-center items-center bg-yellow-500 p-3 rounded-lg mt-5 font-bold'>Submit</button>
                    </div>
                </form>
               
                
            </div>
        </Authenticated>
    );
}
