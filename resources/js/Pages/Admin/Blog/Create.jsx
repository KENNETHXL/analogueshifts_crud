import React from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Create(props) {

    const {data, setData, errors, post} = useForm({
        title: "",
        thumbnail: "",
        content: "",
        publish: false,
    })

    const submit = (e) => {
        e.preventDefault();
        post(route("blog.store"));
    }

    return (
        <Authenticated>
            <Head title="Blog" />
            <div className="home py-16 px-2">


                <form onSubmit={submit} className="grid gap-2 bg-white p-2 md:p-9 rounded-lg border border-gray-200 shadow-md">
                    <label className='text-2xl font-bold text-yellow-500'>Create New</label>
                    <div className='grid gap-3'>
                        <input type='file' accept='image/*' onChange={(e) => setData('thumbnail', e.target.files[0])}
                            placeholder='URL here' className='rounded-lg p-3'/>
                        { errors.thumbnail && <p className='text-red-500'>{ errors.thumbnail }</p>}

                        <input type='text' placeholder='Title here' value={data.title}
                            onChange={(e) => setData("title", e.target.value) } className='rounded-lg p-3'/>
                        { errors.title && <p className='text-red-500'>{ errors.title }</p>}

                        <textarea className='rounded-lg p-3 h-80' value={data.content}
                            onChange={(e) => setData("content", e.target.value) } placeholder='Blog Content' />
                        { errors.content && <p className='text-red-500'>{ errors.content }</p>}
                    </div>

                    <div className='flex justify-between items-center gap-9'>
                        <div className='flex justify-center items-center gap-3'>
                            <input type='checkbox' checked={data.publish} onChange={() => setData("publish", !data.publish)}
                                placeholder='Publish' className='rounded-lg p-3'/>
                            <label>Publish</label>
                        </div>
                        <button className='flex justify-center items-center bg-yellow-500 p-3 rounded-lg mt-5 font-bold'>Submit</button>
                    </div>

                </form>


            </div>
        </Authenticated>
    );
}
