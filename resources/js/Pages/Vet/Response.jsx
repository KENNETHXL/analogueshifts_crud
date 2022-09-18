import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Charts from './Components/Chart';


export default function Response(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />


            <div className="overflow-x-auto py-12 space-y-9 px-3 md:px-12">
                <Charts />
                <div className="">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Date
                            </th>                                                        
                            <th scope="col" className="py-3 px-6">
                                Result
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Profile
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white dark:bg-gray-800 border-t">
                                <th scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 dark:text-white max-w-[250px]">
                                    Kenneth Malaka
                                </th>
                                <td className="py-4 px-6">
                                    20/12/2022
                                </td>
                                <td className="py-4 px-6">
                                    78%
                                </td>
                                <td className="py-4 px-6">
                                    <a className='underline' href={route('response')}>
                                        View
                                    </a>
                                </td>
                                <td className="py-4 px-6 flex gap-3 text-base">
                                    <a className='underline' href=''>Open</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
