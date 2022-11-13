import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Learn(props) {

    return (
        <Authenticated>
            <Head title="Learn" />
            <div className="home py-16 px-2">


                <div className="grid bg-white rounded-lg border border-gray-200 shadow-md">
                    <div className='grid md:grid-cols-3 justify-center gap-3 p-2'>
                        <div className='grid md:col-span-1 items-center'>
                            <iframe height="315"
                                    src="https://www.youtube.com/embed/Xrgk023l4lI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write;
                                    encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                            ></iframe>
                        </div>
                        <div className='grid md:col-span-2 justify-between px-3 gap-2 font-bold'>
                            <div className='flex justify-between p-2'>
                                <span>title</span>
                                <span>tags</span>
                            </div>
                            <p>
                                We are a dynamic and motivated team of people who share the same goal to find the right talent for your company. We offer high quality services and will help you with anything we can from the recruitment stage up until you have made a final decision. We are here to understand exactly what kind of person you want, to tailor our service to best fit your needs and deliver results for businesses in all industries."
                            </p>
                            <div className='grid justify-end'>
                                <a href='https://www.youtube.com/embed/Xrgk023l4lI' target='blank'
                                className='bg-yellow-500 p-2 h-12 items-center rounded-lg font-bold'>
                                    open video
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Authenticated>
    );
}
