import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import CreateQuestion, { CreateButton } from './Components/CreateQuestion';
import { useState } from "react";
import { useEffect } from "react";



export default function Create(props) {
    const [open, setOpen] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="grid py-12 px-2">
                <CreateQuestion />
                <div className="min-h-screen w-full mx-auto px-2 md:px-16 py-8">
                    <div className='grid gap-5 px-3 md:px-8 py-8 bg-white'>
                        <div className='grid gap-3 py-3 rounded-lg'>
                            <button onClick={() => setOpen(!open)} type="button" className="bg-yellow-300 p-5 border-2-l shadow-lg border-yellow-900 rounded-lg flex justify-between items-center w-full">
                                <span className='font-bold text-gray-800 text-xl'>Header information's</span>
                                <MdKeyboardArrowDown data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0"/>
                            </button>
                            {open &&
                            <div className='grid gap-3'>
                                <div className='grid md:grid-cols-3 gap-5'>
                                    <div className='grid gap-2'>
                                        <label className='text-gray-700'>Role Title</label>
                                        <input type={'text'} className='rounded-lg outline-none border-b border-yellow-300' placeholder='Title/Role'/>
                                    </div>
                                    <div className='grid gap-2'>
                                        <label className='text-gray-700'>Price</label>
                                        <input type={'number'} className='rounded-lg outline-none border-b border-yellow-300' placeholder='Price'/>
                                    </div>
                                    <div className='grid gap-2'>
                                        <label className='text-gray-700'>Deadline</label>
                                        <input type={'date'} className='rounded-lg outline-none border-b border-yellow-300' placeholder='Deadline'/>
                                    </div>
                                </div>
                                <div className='grid gap-2'>
                                    <label className='text-gray-700'>Description</label>
                                    <textarea type={'text'} className='rounded-lg outline-none border-b border-yellow-300' placeholder='Description'></textarea>
                                </div>
                            </div>
                            }
                        </div>
                        <label className='bg-yellow-300 p-5 border-2-l shadow-lg border-yellow-900 rounded-lg font-bold text-gray-800 text-xl'>Vetting Questions</label>
                        <div className='py-12 px-2 relative'>
                            <p className='text-lg font-semibold text-gray-500'>1. Question one (1) options and selected answer ?</p>
                            <div className='grid gap-3 p-3'>
                                <div className="flex items-center mb-4">
                                    <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500"/>
                                    <label className="ml-2 text-sm font-medium text-gray-700">option A</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500"/>
                                    <label className="ml-2 text-sm font-medium text-gray-700">option B</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500"/>
                                    <label className="ml-2 text-sm font-medium text-gray-700">option C</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input disabled checked id="disabled-radio-2" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                                    <label className="ml-2 text-sm font-medium text-gray-700">answer to question</label>
                                </div>
                            </div>
                            <div className='flex gap-3 absolute top-3 right-3'>
                                <FiEdit  className='w-5 h-5 text-gray-500'/>
                                <RiDeleteBinLine  className='w-5 h-5 text-red-500'/>
                            </div>
                        </div>
                        <CreateButton />
                    </div> 

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
