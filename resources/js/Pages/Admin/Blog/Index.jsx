import React from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'

export default function Index({blogs}) {

    const {delete: remove} = useForm();

    const deleteLearn = (id) => {
        const response = confirm("you are about to delete the tutorial");
        if(response) {
            remove(route("blog.delete", id));
        }
    }


    return (
        <Authenticated>
            <Head title="Blog" />
            <div className="home py-16 px-2">

            <div className="overflow-x-auto py-12 space-y-9 px-3 md:px-12">
                <a href={route('blog.create')} className='bg-yellow-500 p-3 rounded-lg mt-5 absolute bottom-3 right-3 font-bold'>+ Create New</a>
                <div className="">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Title
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
                            {blogs.map(blog => (
                                <tr className="bg-white border-t" key={blog.id}>
                                    <th scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                                        {blog.title}
                                    </th>
                                    <td className="py-4 px-6">
                                        {blog.publish ? "published" : "Draft"}
                                    </td>
                                    <td className="py-4 px-6">
                                        {new Date(blog.created_at).toDateString()}
                                    </td>
                                    <td className="flex justify-start items-cemter py-4 px-6 gap-3 text-base">
                                        <a className='flex items-center underline' href={route("blog.show", blog.slug)}>
                                            View
                                        </a>
                                        <a className='flex items-center' href={route('blog.edit', blog.id)}>
                                            <FiEdit3 />
                                        </a>
                                        <button className='flex items-center' onClick={() => deleteLearn(blog.id)}>
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
