import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Hire({hire}) {


    return (
        <Authenticated>
            <Head title="Hire" />
            <article className="prose prose-stone max-w-none lg:prose-xl home py-16 px-2 space-y-5">
                <div  className="grid bg-white rounded-lg border border-gray-200 shadow-md">

                    <div className="grid md:col-span-2 p-5 md:p-16">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {hire.name}
                        </h5>
                        <p className="grid justify-between text-justify mb-3 font-normal text-gray-700">
                            {/* {hire.content} */}
                        </p>
                    </div>

                </div>
            </article>
        </Authenticated>
    );
}
