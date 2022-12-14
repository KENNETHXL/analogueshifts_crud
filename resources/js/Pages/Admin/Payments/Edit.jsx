import React from 'react'
import { Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'

export default function Edit() {
  return (
    <Authenticated>
        <Head title="Payments" />
        <div className="py-12 space-y-9 px-3 md:px-12">
            <section className='flex justify-center items-center'>
                <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
                    <h5 className="mb-4 text-lg font-medium text-gray-500">Make Payment</h5>
                    <div className="grid items-baseline gap-1">
                        <label className="text-lg font-semibold">$Amout</label>
                        <span className=''>$20</span>
                        <label className="text-lg font-semibold">Name</label>
                        <span className=''>Abdulwahab Teslim</span>
                        <label className="text-lg font-semibold">Email</label>
                        <a href='mailto: tesimune@gmail.com' target='_blank' className=''>tesimune@gmail.com</a>
                        <label className="text-lg font-semibold">Tel</label>
                        <a href='tel: +2348067988642' target='_blank' className=''>08067988642</a>
                        <label className="text-lg font-semibold">Description</label>
                        <span className=''>Payment for vetting</span>
                        <a href='edit' className='text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 inline-flex justify-center w-full text-center'>
                            Edit
                        </a>
                    </div>
                </div>       
            </section>
        </div>
    </Authenticated>
  )
}
