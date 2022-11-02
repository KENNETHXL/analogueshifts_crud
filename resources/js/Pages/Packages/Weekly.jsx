import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { BsCheckCircleFill } from 'react-icons/bs'
  
  const config = {
      reference: (new Date()).getTime().toString(),
      email: "hellow@analogueshifts.com",
      amount: 1000,
      publicKey: 'pk_test_e318720d1f86ad8d3d5b6476193264e27264f1f9',
  };
  
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookBtn = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }} className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
                Subscribe
            </button>
        </div>
      );
  };
  
  function Weekly(props) {
    return (
        <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
            <h5 className="mb-4 text-xl font-medium text-gray-500">Weekly package</h5>
            <div className="flex items-baseline text-gray-900">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">10</span>
                <span className="ml-1 text-xl font-normal text-gray-500">/Week</span>
            </div>
            <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                    <BsCheckCircleFill className="flex-shrink-0 w-4 h-4 text-blue-600"/>
                    <span className="text-base font-normal leading-tight text-gray-500">10 Vetting max</span>
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
            <PaystackHookBtn />
        </div>       
               
    );
  }
  
  export default Weekly;
