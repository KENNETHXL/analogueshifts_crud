import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs'
  
  
  function Daily(props) {
    return (
        <div className="grid gap-5 p-4 w-full max-w-sm bg-as rounded-lg border shadow-md sm:p-8">
            <h5 className="mb-4 text-xl font-medium text-white">Daily package</h5>
            <div className="flex items-baseline text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">5</span>
                <span className="ml-1 text-xl font-normal text-white">/Day</span>
            </div>
            <span>A detailed wireframe kit made of comprehensive components.</span>
            <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-white"/>
                    <span className="text-base font-normal leading-tight text-gray-800">5 Vetting max</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-white"/>
                    <span className="text-base font-normal leading-tight text-gray-800">Email Notification</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-white"/>
                    <span className="text-base font-normal leading-tight text-gray-800">Vetting Analytics</span>
                </li>
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-white"/>
                    <span className="text-base font-normal leading-tight text-gray-800">Integration help</span>
                </li>
            </ul>
            <button className='text-yellow-600 bg-white hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
                Subscribe
            </button>
        </div>       
               
    );
  }
  
  export default Daily;
