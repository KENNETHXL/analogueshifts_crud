import React, {useState} from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import {useForm} from "@inertiajs/inertia-react";

function Payment({auth, ...props}) {

    const [state, setState] = useState({
        amount: 100,
        tel: "",
        description: ""
    });

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const config = {
        public_key: 'FLWPUBK_TEST-8cf0d049f7e84a6b39bbf7169f1b936d-X',
        tx_ref: "AS-" + Date.now(),
        amount: state.amount,
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: auth.user.email,
          phone_number: state.tel,
          name: auth.user.name,
        },
        customizations: {
          title: 'AnalogueShifts',
          description: state.description,
          logo: 'https://app.analogueshifts.com/logo.png',
        },
  };

  const fwConfig = {
    ...config,
    text: 'Pay',
    callback: async (response) => {
       axios.post(route("payment.store"), response)
           .then(res => {
            //    console.log(res.data)
               alert("Payment Successful & Record Saved Successfully")
               closePaymentModal()
           })
           .catch(err => {
                alert("server Error")
                // console.error(err.response.data)
           })
    },
    onClose: () => {

    },
};
return (
    <Authenticated>
      <div className="py-12 space-y-9 px-3 md:px-12">
        <section className='flex justify-center items-center'>
            <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
                <h5 className="mb-4 text-lg font-medium text-gray-500">Make Payment</h5>
                <div className="grid items-baseline gap-1">
                    <label className="text-lg font-semibold" >Amount in Naira</label>
                    <input type='number' className='' name="amount" value={state.amount}
                           onChange={handleChange} required />
                    <label className="text-lg font-semibold">Tel</label>
                    <input type='tel' className='' name="tel" value={state.tel}
                           onChange={handleChange} required/>
                    <label className="text-lg font-semibold">Description</label>
                    <textarea type='text' className='' name="description" value={state.description}
                              onChange={handleChange} required/>
                    <FlutterWaveButton
                        className='text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none
                            focus:ring-yellow-200 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 inline-flex
                            justify-center w-full text-center'
                        {...fwConfig}
                    />
                </div>
            </div>
        </section>
      </div>
    </Authenticated>

);
}

export default Payment;
