import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';

export default function Talents(props) {
    return (
        <All>
            <Head title="Welcome" />
            <div className="home py-16 px-2">
                
                
                <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md relative">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            <span className="sr-only">Open dropdown</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdown" className=" z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute">
                            <ul className="py-1">
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Share</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Vet</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Report</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="images/ceo.jpeg" alt="Kenneth Malaka"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Kenneth Malaka</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300">Hire Talent</a>
                            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                        </div>
                    </div>
                </div>

                
            </div>
        </All>
    );
}
