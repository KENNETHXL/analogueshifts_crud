import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs'
  
  function Yearly(props) {
    return (
        <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
            <h5 className="mb-4 text-xl font-medium text-gray-500">Yearly package</h5>
            <div className="flex items-baseline text-gray-900">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">50</span>
                <span className="ml-1 text-xl font-normal text-gray-500">/Year</span>
            </div>
            <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-yellow-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">Unlimited Vetting</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-yellow-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">Email Notification</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-yellow-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">Vetting Analytics</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-yellow-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">Integration help</span>
                </li>
            </ul>
            <button className='text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
                Subscribe
            </button>
        </div>       
               
    );
  }
  
  export default Yearly;
