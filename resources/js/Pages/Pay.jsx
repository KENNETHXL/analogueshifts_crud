import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import Authenticated from '@/Layouts/AuthenticatedLayout';

  

  
  function Pay(props) {
    const config = {
        public_key: 'FLWPUBK_TEST-8cf0d049f7e84a6b39bbf7169f1b936d-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phone_number: '070********',
          name: 'john doe',
        },
        customizations: {
          title: 'AnalogueShifts',
          description: 'Payments',
          logo: 'https://analogueshifts.com/logo.png',
        },
      };
    
      const fwConfig = {
        // if 1>2 {
        ...config,
        text: 'Pay',
        callback: (response) => {
           console.log(response);
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      // }else{
        // alert='error'
      // }
    };
    return (
        <Authenticated>
          <div className="py-12 space-y-9 px-3 md:px-12">
            <section className='flex justify-center items-center'>
                <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
                    <h5 className="mb-4 text-lg font-medium text-gray-500">Make Payment</h5>
                    <div className="grid items-baseline gap-1">
                        <label className="text-lg font-semibold">$Amout</label>
                        <input type='number' className='' required/>
                        <label className="text-lg font-semibold">Name</label>
                        <input type='text' className='' required/>
                        <label className="text-lg font-semibold">Email</label>
                        <input type='email' className='' required/>
                        <label className="text-lg font-semibold">Tel</label>
                        <input type='tel' className='' required/>
                        <label className="text-lg font-semibold">Description</label>
                        <textarea type='text' className='' required/>
                        <FlutterWaveButton 
                            className='text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 inline-flex justify-center w-full text-center'                        
                            {...fwConfig} 
                        />
                    </div>
                </div>       
            </section>
          </div>
        </Authenticated>
               
    );
  }
  
  export default Pay;
