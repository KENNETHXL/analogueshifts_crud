import React from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Edit({learn}) {

    const {data, setData, put, errors} = useForm({
        title: learn.title ?? "",
        url: learn.url ?? "",
        tag: learn.tag ?? "",
        description: learn.description ?? "",
    })

    const submit = (e) => {
        e.preventDefault();
        put(route("learn.update", learn.slug));
    }

    return (
        <Authenticated>
            <Head title="Learn" />
            <div className="home py-16 px-2">

                <form onSubmit={submit} className="grid gap-2 bg-white p-2 md:p-9 rounded-lg border border-gray-200 shadow-md">
                    <label className='text-2xl font-bold text-yellow-500'>Edit Video</label>
                    <div className='grid gap-3'>
                        <input type='text' placeholder='Title here' value={data.title}
                            onChange={(e) => setData("title", e.target.value)} className='rounded-lg p-3'/>
                            { errors.title && <p className='text-red-500'>{ errors.title }</p>}
                        <input type='text' placeholder='Tag here' value={data.tag}
                            onChange={(e) => setData("tag", e.target.value)} className='rounded-lg p-3'/>
                            { errors.tag && <p className='text-red-500'>{ errors.tag }</p>}
                        <input type='text' placeholder='URL here' value={data.url}
                            onChange={(e) => setData("url", e.target.value)} className='rounded-lg p-3'/>
                            { errors.url && <p className='text-red-500'>{ errors.url }</p>}
                        <textarea className='rounded-lg p-3 h-80' value={data.description}
                            onChange={(e) => setData("description", e.target.value)} placeholder='Description' />
                            { errors.description && <p className='text-red-500'>{ errors.description }</p>}
                    </div>
                    <div className='grid justify-end'>
                        <button className='bg-yellow-500 p-3 rounded-lg mt-5 font-bold'>Update</button>
                    </div>
                </form>

            </div>
        </Authenticated>
    );
}
