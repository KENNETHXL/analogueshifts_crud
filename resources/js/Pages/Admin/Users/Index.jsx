import Authenticated from '@/Layouts/AuthenticatedLayout';
import React from 'react'

function Index({users}) {
    return ( 
        <Authenticated>
        
            <div className="min-h-screen pt-12">
                <div className="grid gap-3 max-w-7xl mx-auto px-3 md:px-8">
                    <div className="grid overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Title
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Role
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
                                {users.map(user => (
                                    <tr className="bg-white border-t" key={user.id}>
                                        <th scope="row"
                                            className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                                            {user.id}
                                        </th>
                                        <th scope="row"
                                            className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                                            {user.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            {user.email}
                                        </td>
                                        <td className="py-4 px-6">
                                            {user.role}
                                        </td>
                                        <td className="py-4 px-6">
                                            {new Date(user.created_at).toDateString()}
                                        </td>
                                        <td className="flex justify-start items-cemter py-4 px-6 gap-3 text-base">
                                            {/* <a className='flex items-center underline' href={route("user.show", user.slug)}>
                                                View
                                            </a> */}
                                            {/* <a className='flex items-center' href={route('user.edit', user.id)}>
                                                <FiEdit3 />
                                            </a> */}
                                            <button className='flex items-center' onClick={() => deleteLearn(user.id)}>
                                                {/* <MdOutlineDelete /> */}D
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

export default Index;