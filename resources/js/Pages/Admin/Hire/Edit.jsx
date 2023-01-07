import { useState} from 'react';
import { Link, Head, useForm, usePage } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Edit({hire}) {
    
    const auth = usePage().props.auth;

    const {data, setData, errors, put} = useForm({
        status: hire.status ?? "",
        display: hire.display ?? "",
        name: hire.name ?? "",
        email: hire.email ?? "",
        companyName: hire.companyName ?? "",
        logoURL: hire.logoURL ?? "",
        tel: hire.tel ?? "",
        vet: hire.vet ?? "",
        role: hire.role ?? "",
        hire_type: hire.hire_type ?? "",
        range: hire.range ?? "",
        expirience: hire.expirience ?? "",
        duration: hire.duration ?? "",
        description: hire.description ?? "",
    })
    
    const submit = (e) => {
        e.preventDefault();
        put(route("hire.update", hire.id));
    }
      

    return (
        <Authenticated>
            <Head title="Hire" />
            <div className="home py-16 px-2">

                <form onSubmit={submit} className='grid gap-3 bg-white p-3 md:p-6 m-2 md:m-3 rounded-lg'>

                    <div className='flex justify-between'>
                        {auth?.user?.role == 'admin' ? (
                            <div className='flex items-end'>
                                <select value={data.status} onChange={(e) => setData("status", e.target.value) }>
                                    <option value="1">Approved</option>
                                    <option value="0">Pending</option>
                                </select>
                            </div>
                        ):(
                            <>
                                {auth?.user?.role == 'staff' ? (
                                    <div className='flex items-end'>
                                        <select value={data.status} onChange={(e) => setData("status", e.target.value) }>
                                            <option value="1">Approved</option>
                                            <option value="0">Pending</option>
                                        </select>
                                    </div>
                                ):(
                                    <div>
                                        {hire.status == '1' ? (
                                            <span className='flex text-green-500 text-xs font-bold italic items-start'>Approved</span>
                                        ):(
                                            <span className='flex text-red-500 text-xs font-bold italic items-start'>Pending Approval</span>
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                        <div className='flex gap-3'>
                        {auth?.user.id == hire.user_id ? (
                            <select value={data.display} onChange={(e) => setData("display", e.target.value) }>
                                <option value="1">Live</option>
                                <option value="0">Offline</option>
                            </select>
                        ):(
                            null
                        )}
                            
                            <button type="submit" name='send' className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Save
                            </button>
                        </div>
                    </div>                    
                    {auth?.user.id == hire.user_id ? (
                        <div className='grid md:grid-cols-3 gap-5'>
                        
                            <div className="grid md:col-span-1 p-3 bg-white rounded-lg border border-gray-200 shadow-md">
                                <div>
                                    <label className="block mb-3 text-sm font-medium text-gray-900">Contacts</label>
                                    <div className='grid gap-3'>
                                        <div className='mb-1'>
                                            { errors.name && <p className='text-red-500'>{ errors.name }</p>}
                                            <label className="block text-sm font-medium text-gray-900">Name*</label>
                                            <input type="text" value={data.name} onChange={(e) => setData("name", e.target.value) }  
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                            placeholder='AnalogueShifts' required/>
                                        </div>
                                        <div className='mb-1'>
                                            { errors.email && <p className='text-red-500'>{ errors.email }</p>}
                                            <label className="block text-sm font-medium text-gray-900">Email Address*</label>
                                            <input type="email" value={data.email} onChange={(e) => setData("email", e.target.value) }  
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                            placeholder='Full-Stack Developer' required/>
                                        </div>
                                        <div className='mb-1'>
                                            { errors.tel && <p className='text-red-500'>{ errors.tel }</p>}
                                            <label className="block text-sm font-medium text-gray-900">Phone Number*</label>
                                            <input type="tel" value={data.tel} onChange={(e) => setData("tel", e.target.value) }  
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                            placeholder='+2348012345678' required/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-3 text-sm font-medium text-gray-900">Advance info</label>
                                    <div className='grid gap-3'>
                                        <div className='mb-1'>
                                            { errors.companyName && <p className='text-red-500'>{ errors.companyName }</p>}
                                            <label className="block text-sm font-medium text-gray-900">Company Name</label>
                                            <input type="text" value={data.companyName} onChange={(e) => setData("companyName", e.target.value) }  
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                            placeholder='AnalogueShifts' />
                                        </div>
                                        <div className='mb-1'>
                                            { errors.logoURL && <p className='text-red-500'>{ errors.logoURL }</p>}
                                            <label className="block text-sm font-medium text-gray-900">Logo URL</label>
                                            <input type="text" value={data.logoURL} onChange={(e) => setData("logoURL", e.target.value) }  
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                            placeholder='https://analogueshifts.com/logo.png'/>
                                        </div>
                                    </div>
                                </div>                          
                            </div>

                            <div className="grid md:col-span-2 p-3 bg-white rounded-lg border border-gray-200 shadow-md relative"> 
                                <div className='grid gap-5'>
                                    <label className="block mb-3 text-sm font-medium text-gray-900">Hire Details -Required (*)</label>
                                    
                                    <div className='mb-1'>
                                        { errors.role && <p className='text-red-500'>{ errors.role }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Role*</label>
                                        <input type="text" value={data.role} onChange={(e) => setData("role", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='Full-Stack Web Developer' required/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.hire_type && <p className='text-red-500'>{ errors.hire_type }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Type*</label>
                                        <input type="text" value={data.hire_type} onChange={(e) => setData("hire_type", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='Remote or Job Location' required/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.range && <p className='text-red-500'>{ errors.range }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Salary Range*</label>
                                        <input type="text" value={data.range} onChange={(e) => setData("range", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='$100K' required/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.expirience && <p className='text-red-500'>{ errors.expirience }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Expirience*</label>
                                        <input type="text" value={data.expirience} onChange={(e) => setData("expirience", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='5 Years' required/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.duration && <p className='text-red-500'>{ errors.duration }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Job Duration*</label>
                                        <input type="text" value={data.duration} onChange={(e) => setData("duration", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='9 Months' required/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.vet && <p className='text-red-500'>{ errors.vet }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Application/Vetting URL*</label>
                                        <input type="text" value={data.vet} onChange={(e) => setData("vet", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='https://analogueshifts.com/application/vet' required/>
                                    </div>                    
                                    <div className="mb-6">
                                        { errors.description && <p className='text-red-500'>{ errors.description }</p>}                                 
                                        <label className="block mb-1 text-sm font-medium text-gray-900">Description*</label>
                                        <textarea name='decription' id="message" value={data.description} onChange={(e) => setData("description", e.target.value) }                                          
                                        rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500" 
                                        placeholder="Describe skill requirements..."></textarea>
                                    </div>                                
                                </div> 
                            </div>
                        
                        </div>
                    ):(
                        <div className='grid md:grid-cols-3 gap-5'>
                        
                            <div className="grid md:col-span-1 p-3 bg-white rounded-lg border border-gray-200 shadow-md">
                                <div>
                                    <label className="block mb-3 text-sm font-medium text-gray-900">Contacts</label>
                                    <div className='grid gap-3'>
                                        <div className='mb-1'>
                                            { errors.name && <p className='text-red-500'>{ errors.name }</p>}
                                            <label className="block text-sm font-medium text-gray-900">Name*</label>
                                            <input type="text" value={data.name} onChange={(e) => setData("name", e.target.value) }  
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                            placeholder='AnalogueShifts' required disabled/>
                                        </div>
                                        <div className='mb-1'>
                                            { errors.email && <p className='text-red-500'>{ errors.email }</p>}
                                            <label className="block text-sm font-medium text-gray-900">Email Address*</label>
                                            <input type="email" value={data.email} onChange={(e) => setData("email", e.target.value) }  
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                            placeholder='Full-Stack Developer' required disabled/>
                                        </div>
                                        <div className='mb-1'>
                                            { errors.tel && <p className='text-red-500'>{ errors.tel }</p>}
                                            <label className="block text-sm font-medium text-gray-900">Phone Number*</label>
                                            <input type="tel" value={data.tel} onChange={(e) => setData("tel", e.target.value) }  
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                            placeholder='+2348012345678' required disabled/>
                                        </div>
                                    </div>
                                </div>                            
                            </div>

                            <div className="grid md:col-span-2 p-3 bg-white rounded-lg border border-gray-200 shadow-md relative"> 
                                <div className='grid gap-5'>
                                    <label className="block mb-3 text-sm font-medium text-gray-900">Hire Details -Required (*)</label>
                                    
                                    <div className='mb-1'>
                                        { errors.role && <p className='text-red-500'>{ errors.role }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Role*</label>
                                        <input type="text" value={data.role} onChange={(e) => setData("role", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='Full-Stack Web Developer' required disabled/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.hire_type && <p className='text-red-500'>{ errors.hire_type }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Type*</label>
                                        <input type="text" value={data.hire_type} onChange={(e) => setData("hire_type", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='Remote or Job Location' required disabled/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.range && <p className='text-red-500'>{ errors.range }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Salary Range*</label>
                                        <input type="text" value={data.range} onChange={(e) => setData("range", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='$100K' required disabled/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.expirience && <p className='text-red-500'>{ errors.expirience }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Expirience*</label>
                                        <input type="text" value={data.expirience} onChange={(e) => setData("expirience", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='5 Years' required disabled/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.duration && <p className='text-red-500'>{ errors.duration }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Job Duration*</label>
                                        <input type="text" value={data.duration} onChange={(e) => setData("duration", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='9 Months' required disabled/>
                                    </div>
                                    <div className='mb-1'>
                                        { errors.vet && <p className='text-red-500'>{ errors.vet }</p>}
                                        <label className="block text-sm font-medium text-gray-900">Application/Vetting URL*</label>
                                        <input type="text" value={data.vet} onChange={(e) => setData("vet", e.target.value) }  
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
                                        placeholder='https://analogueshifts.com/application/vet' required disabled/>
                                    </div>                    
                                    <div className="mb-6">
                                        { errors.description && <p className='text-red-500'>{ errors.description }</p>}                                 
                                        <label className="block mb-1 text-sm font-medium text-gray-900">Description*</label>
                                        <textarea name='decription' id="message" value={data.description} onChange={(e) => setData("description", e.target.value) }                                          
                                        rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500" 
                                        placeholder="Describe skill requirements..." disabled></textarea>
                                    </div>                                
                                </div> 
                            </div>
                        
                        </div>
                        
                    )}


                </form>

            </div>
        </Authenticated>
    );
}
