import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs'
  
  
  function Daily(props) {
    return (
        <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
            <h5 className="mb-4 text-xl font-medium text-gray-500">Daily package</h5>
            <div className="flex items-baseline">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">5</span>
                <span className="ml-1 text-xl font-normal text-gray-500">/Day</span>
            </div>
            <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-blue-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">5 Vetting max</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-blue-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">Email Notification</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-blue-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">Vetting Analytics</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-blue-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">Integration help</span>
                </li>
            </ul>
            <button className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
                Subscribe
            </button>
        </div>       
               
    );
  }
  
  export default Daily;
