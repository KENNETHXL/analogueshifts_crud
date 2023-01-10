import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';
import About from '@/Components/About';
import {BsArrowRight} from 'react-icons/bs';

export default function Blog(props) {
    return (
        <All>
            <Head title="About" />
            <div className="home min-h-screen">
                <header className="grid justify-center gap-9 text-gray-800 bg-as px-5 py-16 md:py-20">
                    <div className='grid justify-between md:grid-cols-2 gap-3'>
                        <div className='grid gap-5 md:p-9'>
                        <div className='grid items-center'> 
                            <h4 className="text-3xl md:text-7xl font-black">About Us</h4>
                        </div>
                        <div className="flex flex-col gap-9 justify-start items-center md:items-start text-gray-800">
                            <p className='flex items-center text-xl md:leading-loose'>
                            AnalogueShifts is a Project Management and Talent Acquisition Company. 
                            Our mission is to solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients. 
                            We are equipped with the most talented work force across the globe and we are ready to work 24/7.
                            </p>
                            <a href={route('hire.talents')} className='btn-lg bg-black hover:text-yellow-100 hover:ring-2 ring-black'>
                            <span>Find Top Talents</span>
                            <BsArrowRight />
                            </a>
                        </div>
                        </div>
                        <div className='grid justify-center gap-5'>
                        <img src='images/12.jpg' className='grid justify-center items-center h-72 w-80 md:h-[400px] md:w-[600px]  rounded-lg' alt='' />
                        </div>
                    </div>
                </header>
                <About />  
                
            </div>
        </All>
    );
}
