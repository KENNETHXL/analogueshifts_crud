import React from 'react'
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { MdOutlineDelete } from 'react-icons/md'

export default function Index({hires}) {

  const {delete: remove} = useForm();

    const deleteLearn = (id) => {
        const response = confirm("you are about to delete the application");
        if(response) {
            remove(route("user.delete", id));
        }
    }

  return (
    <Authenticated>

      <Head title="Hire" />

      <div className='flex gap-3 right-3 bottom-5 absolute'>
        <a href={route('hire.myhire')} className='bg-blue-500 p-3 rounded-lg mt-5 font-bold'>My Hire's</a>
        <a href={route('hire.talents')} className='bg-yellow-500 p-3 rounded-lg mt-5 font-bold'>+ New</a>
      </div>
      <div className="home overflow-x-auto pt-16 px-2 md:px-9">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    Tel
                </th>
                <th scope="col" className="py-3 px-6">
                    Location
                </th>
                <th scope="col" className="py-3 px-6">
                    Display
                </th>
                <th scope="col" className="py-3 px-6">
                    Staus
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
              {hires.map(hire => (
                <tr className="bg-white border-t" key={hire.id}>
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 max-w-[250px]">
                    {hire.name}
                  </th>
                  <td className="py-4 px-6">
                    {hire.email}
                  </td>
                  <td className="py-4 px-6">
                    {hire.tel}
                  </td>
                  <td className="py-4 px-6">
                    {hire.hire_type}
                  </td>
                  <td className="py-4 px-6">
                    {hire.display == '1' ? (
                        <span className='flex text-green-500 text-xs font-bold italic items-start'>Live</span>
                    ):(
                        <span className='flex text-red-500 text-xs font-bold italic items-start'>Offline</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {hire.status == '1' ? (
                        <span className='flex text-green-500 text-xs font-bold italic items-start'>Approved</span>
                    ):(
                        <span className='flex text-red-500 text-xs font-bold italic items-start'>Pending Approval</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {new Date(hire.created_at).toDateString()}
                  </td>
                  <td className="flex justify-start items-cemter py-4 px-6 gap-3 text-base">
                    <a className='flex items-center underline' href={route("hire.view", hire.slug)}>
                      Details
                    </a>
                    <a href={route("hire.edit", hire.slug)} className='flex items-center underline'>
                      <h3 className='text-lg font-medium'>Edit</h3>
                    </a>
                    <button className='flex items-center' onClick={() => deleteLearn(hire.id)}>
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </Authenticated>
  )
}
