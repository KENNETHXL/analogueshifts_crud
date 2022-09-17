import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Index(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Vetting Dashboard" />

            <div className="min-h-screen py-12">
                
            </div>
        </AuthenticatedLayout>
    );
}
