import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { AiOutlineShareAlt } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'

export default function Index(props) {
    return (
        <Authenticated>
            <Head title="Learn" />
            <div className="home py-16 px-2">

            <div className="overflow-x-auto py-12 space-y-9 px-3 md:px-12">
                <a href={route('learn_create')} className='bg-yellow-500 p-3 rounded-lg mt-5 absolute bottom-3 right-3 font-bold'>+ New Video</a>
                <div className="">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Date
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
                                    How to become a Full-Stack developer
                                </th>
                                <td className="py-4 px-6">
                                    short Description
                                </td>
                                <td className="py-4 px-6">
                                    <a className='underline' href={route('learn')}>
                                        View
                                    </a>
                                </td>
                                <td className="py-4 px-6">
                                    30/12/2022
                                </td>
                                <td className="py-4 px-6 flex gap-3 text-base">
                                    <AiOutlineShareAlt />
                                    <a className='' href={route('learn_edit')}>
                                        <FiEdit3 />
                                    </a>
                                    <MdOutlineDelete />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
               
                
            </div>
        </Authenticated>
    );
}