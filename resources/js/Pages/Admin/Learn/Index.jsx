import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';

export default function Index(props) {
    return (
        <All>
            <Head title="Learn" />
            <div className="home py-16 px-2">

                
                <div className="grid lg:grid-flow-col-4 md:grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md">
                    <div className='grid justify-center items-center gap-3 p-2'>
                        <div>
                            <iframe height="315" 
                                    src="https://www.youtube.com/embed/Xrgk023l4lI" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; 
                                    encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                            ></iframe>
                        </div>
                        <div className='flex justify-between px-3 gap-2 font-bold'>
                            <span>title</span>
                            <span>tags</span>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </All>
    );
}
