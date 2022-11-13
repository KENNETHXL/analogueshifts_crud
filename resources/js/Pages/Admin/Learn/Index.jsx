import React from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { AiOutlineShareAlt } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'

export default function Index({learns}) {

    const {delete: remove} = useForm();

    const deleteLearn = (id) => {
        const response = confirm("you are about to delete the tutorial");
        if(response) {
            remove(route("learn.delete", id));
        }
    }

    return (
        <Authenticated>
            <Head title="Learn" />
            <div className="home py-16 px-2">

            <div className="overflow-x-auto py-12 space-y-9 px-3 md:px-12">
                <a href={route('learn.create')} className='bg-yellow-500 p-3 rounded-lg mt-5 absolute bottom-3 right-3 font-bold'>+ New Video</a>
                <div className="">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Tag
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
                            {learns.map(learn => (
                                <tr className="bg-white border-t" key={learn.id}>
                                    <th scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                                        {learn.title}
                                    </th>
                                    <td className="py-4 px-6">
                                        {learn.tag}
                                    </td>
                                    <td className="py-4 px-6">
                                        <a className='underline' target="_blank" href={learn.url}>
                                            View
                                        </a>
                                    </td>
                                    <td className="py-4 px-6">
                                        30/12/2022
                                    </td>
                                    <td className="py-4 px-6 flex gap-3 text-base">
                                        <AiOutlineShareAlt />
                                        <a className='' href={route('learn.edit', learn.slug)}>
                                            <FiEdit3 />
                                        </a>
                                        <button onClick={() => deleteLearn(learn.id)}>
                                            <MdOutlineDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            </div>
        </Authenticated>
    );
}
