import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { AiOutlineShareAlt } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'


export default function Index(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Vetting Dashboard" />

            <div className="overflow-x-auto py-12 space-y-9 px-3 md:px-12">
                <a href={route('vet.create')} className='bg-yellow-500 p-3 rounded-lg mt-5 absolute bottom-3 right-3 font-bold'>+ New Vet</a>
                <div className="">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Role/Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Expire
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Results
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-t">
                                <th scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                                    Full-Stack developer
                                </th>
                                <td className="py-4 px-6">
                                    20/12/2022
                                </td>
                                <td className="py-4 px-6">
                                    30/12/2022
                                </td>
                                <td className="py-4 px-6">
                                    $20
                                </td>
                                <td className="py-4 px-6">
                                    <a className='underline' href={route('vet.response')}>
                                        View
                                    </a>
                                </td>
                                <td className="py-4 px-6">
                                    Published
                                </td>
                                <td className="py-4 px-6 flex gap-3 text-base">
                                    <AiOutlineShareAlt />
                                    <FiEdit3 />
                                    <MdOutlineDelete />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
