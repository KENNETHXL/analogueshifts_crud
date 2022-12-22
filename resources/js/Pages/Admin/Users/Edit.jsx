import React from 'react';
import { Link, Head, usePage, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

function Edit({user}) {
    
    const auth = usePage().props.auth;

    const {data, setData, errors, put} = useForm({
        role: user.role ?? "",
    })

    const submit = (e) => {
        e.preventDefault();
        put(route("user.update", user.id));
    }


    return (
        <Authenticated>
            <Head title="user" />
            <div className="home py-16 px-2">
               
                <div className='grid md:grid-cols-3 gap-5 bg-white p-3 md:p-6 m-2 md:m-3 rounded-lg'>
                    <div className='grid gap-3 md:col-span-1'>
                        {/* profile information */}
                        <div className="grid gap-4 w-full p-3 pt-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md relative">
                            {auth?.user?.id == user.id ? (
                                <>
                                    <span className='flex justify-center uppercase'>You can't temper with your profile</span>
                                </>
                            ):(
                                <form onSubmit={submit}>
                                    {auth?.user?.role == 'admin' ? (
                                        <>
                                            {auth?.user?.id == '1' ? (
                                                <div  className="flex justify-between gap-2 p-3">
                                                    <select value={data.role} onChange={(e) => setData("role", e.target.value) }>
                                                        <option value="admin">admin</option>
                                                        <option value="staff">staff</option>
                                                        <option value="user">user</option>
                                                        <option value="suspend">suspend</option>
                                                    </select>
                                                    <button type="submit" name='send' className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm p-3 text-center">
                                                        Save and Submit
                                                    </button>
                                                </div>
                                            ):(
                                                <>
                                                    {user.role == 'admin' ? (null):(
                                                        <div  className="flex justify-between gap-2 p-3">
                                                            <select value={data.role} onChange={(e) => setData("role", e.target.value) }>
                                                                <option value="staff">staff</option>
                                                                <option value="user">user</option>
                                                                <option value="suspend">suspend</option>
                                                            </select>
                                                            <button type="submit" name='send' className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm p-3 text-center">
                                                                Save and Submit
                                                            </button>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    ):(
                                        <>
                                            {user.role == 'staff' ? (null):(
                                                <div  className="flex justify-between gap-2 p-3">
                                                    <select value={data.role} onChange={(e) => setData("role", e.target.value) }>
                                                        <option value="user">user</option>
                                                        <option value="suspend">suspend</option>
                                                    </select>
                                                    <button type="submit" name='send' className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm p-3 text-center">
                                                        Save and Submit
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </form>
                            )}
                            <div className="flex flex-col items-center">
                                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="/images/blank.png" alt="profile image"/>
                                <h5 className="mb-1 text-xl font-medium text-gray-900">{user.name}</h5>
                                <span className="text-sm text-gray-500 uppercase">Validation: {user.role}</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:col-span-2 gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-md relative">                            
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                            </header>
                            <div className="">
                                <div  className="mb-6">
                                    <label className="block m-2 text-sm font-medium text-gray-900">Name</label>
                                    <span className="bg-white rounded-lg border border-gray-200 shadow-md px-2 py-3 mt-1 block w-full">
                                        {user.name}
                                    </span>
                                </div>
                                <div  className="mb-6">
                                    <label className="block m-2 text-sm font-medium text-gray-900">Email</label>
                                    <span  className="bg-white rounded-lg border border-gray-200 shadow-md px-2 py-3 mt-1 block w-full">
                                        {user.email}
                                    </span>
                                </div>
                                <div  className="mb-6">
                                    <label className="block m-2 text-sm font-medium text-gray-900">Contact</label>
                                    <span   className="bg-white rounded-lg border border-gray-200 shadow-md px-2 py-3 mt-1 block w-full">
                                        {user.tel}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Authenticated>
    );
}

export default Edit;

