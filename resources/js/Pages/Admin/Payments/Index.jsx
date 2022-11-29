import React from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'

export default function Payments({payments}) {
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
                        {payments.map(payment => (
                            <tr className="bg-white border-t" key={payment.id}>
                                <th scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                                    {payment.id}
                                </th>
                                <td className="py-4 px-6">
                                    ${payment.amount}
                                </td>
                                <td className="py-4 px-6">
                                    {payment?.status == 'successful' ? (
                                        <span className='p-1 bg-green-200 text-green-700 rounded-lg'>
                                            {payment.status}
                                        </span>
                                    ):(
                                        <span className='p-1 bg-red-200 text-red-700 rounded-lg'>
                                            {payment.status}
                                        </span>
                                    )}
                                </td>
                                <td className="py-4 px-6 flex gap-3 text-base">
                                    <a className='underline' href={route('payment.view', payment.id)}>Open</a>
                                </td>
                                <td className="py-4 px-6">
                                    {payment.tx_date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </Authenticated>
  )
}
