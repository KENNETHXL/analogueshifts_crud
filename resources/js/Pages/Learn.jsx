import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Learn({learns}) {


    return (
        <Authenticated>
            <Head title="Learn" />
            <div className="home py-16 px-2">

                {learns.map(learn => (
                    <div className="grid bg-white rounded-lg border border-gray-200 shadow-md">
                        <div className='grid md:grid-cols-3 justify-center gap-3 p-2'>
                            <div className='grid md:col-span-1 items-center'>
                                <iframe height="315"
                                        src={"https://www.youtube.com/embed/"+learn.url}
                                        title={learn.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write;
                                        encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                ></iframe>
                            </div>
                            <div className='grid md:col-span-2 justify-between px-3 gap-2 font-bold'>
                                <div className='flex justify-between p-2'>
                                    <span>{learn.title}</span>
                                    <span>{learn.tag}</span>
                                </div>
                                <p>
                                    {learn.description}
                                </p>
                                <div className='grid justify-end'>
                                    <a href={"https://www.youtube.com/embed/"+learn.url} target='blank'
                                    className='bg-yellow-500 p-2 h-12 items-center rounded-lg font-bold'>
                                        open video
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </Authenticated>
    );
}
