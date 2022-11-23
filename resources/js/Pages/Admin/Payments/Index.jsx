import React from 'react'
import { Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'

export default function Payments() {
  return (
    <Authenticated>
        <Head title="Payments" />
        <div className="overflow-x-auto py-12 space-y-9 px-3 md:px-12">
            <div className="">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Amount
                        </th>                                                        
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-t">
                            <th scope="row"
                                className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                                Kenneth Malaka
                            </th>
                            <td className="py-4 px-6">
                                $20
                            </td>
                            <td className="py-4 px-6">
                                <span className='p-1 bg-green-200 text-green-700 rounded-lg'>
                                    Success
                                </span>
                            </td>
                            <td className="py-4 px-6 flex gap-3 text-base">
                                <a className='underline' href={route('payments.view')}>Open</a>
                            </td>
                            <td className="py-4 px-6">
                                20/12/2022
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Authenticated>
  )
}
