import React, { useState } from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { usePage } from '@inertiajs/inertia-react'

function Profile() {
    const auth = usePage().props.auth;
    
  return (
    <section>
        <div className='grid gap-3 md:col-span-1'>

            {/* profile information */}
            <div className="grid w-full pt-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md relative">
                <div className="flex flex-col items-center pb-10">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="images/blank.png" alt="profile image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{auth?.user?.name}</h5>
                    <span className="text-sm text-gray-500 uppercase">Validation: {auth?.user?.role}</span>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Profile