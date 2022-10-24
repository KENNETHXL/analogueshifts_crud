import React, { useState } from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { usePage } from '@inertiajs/inertia-react'

function Profile() {
    const auth = usePage().props.auth;
    
  return (
    <Authenticated>
        <div className="min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-3 md:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">Welcome Back, We miss you!</div>
                    </div>

                    {/* user profile information */}
                    <div className='grid md:grid-cols-3 gap-5 bg-white p-3 md:p-6 m-2 md:m-3 rounded-lg'>
                        

                        <div className='grid gap-3 md:col-span-1'>

                            {/* profile information */}
                            <div className="grid w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
                                <div className="flex justify-end px-4 pt-4">
                                    <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <span className="sr-only">Open dropdown</span>
                                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                    </button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-3 right-3" >
                                        <ul className="py-1" >
                                        <li>
                                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center pb-10">
                                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="images/ceo.jpeg" alt="profile image"/>
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{auth?.user?.name}</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Validation: {auth?.user?.role}</span>
                                </div>
                            </div>

                            {/* password update */}
                            <div className="grid md:col-span-1 p-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Change password</label>
                                    <form className='grid gap-3'>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Old password</label>
                                        <input type="password" id="old-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light" required=""/>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New password</label>
                                        <input type="password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light" required=""/>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                                        <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light" required=""/>
                                    </form>
                                </div>                            
                            </div>

                        </div>

                        {/* profile update form */}
                        <div className="grid md:col-span-2 p-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">                            
                            <form>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light" placeholder="name@emailprovider.com" required=""/>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact</label>
                                    <input type="tel" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light" placeholder="name@emailprovider.com" required=""/>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stack</label>
                                    <input type="text" id="stack" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light" placeholder="name@emailprovider.com" required=""/>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Role</label>
                                    <input type="text" id="role" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light" placeholder="name@emailprovider.com" required=""/>
                                </div>
                                <div className="mb-6">
                                </div>
                                <div className="mb-6">                                    
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About Me</label>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Leave a comment..."></textarea>
                                </div>                                
                                
                                <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Update Profile</button>
                            </form>
                        </div>

                    </div>
                </div>
        </div>
    </Authenticated>
  )
}

export default Profile