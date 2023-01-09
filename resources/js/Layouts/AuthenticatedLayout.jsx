import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';

export default function Authenticated({ header, children }) {

    const auth = usePage().props.auth;
    return (
        <div className="min-h-screen bg-yellow-50 py-20">

          
            <Navbar />
          
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>

            
        </div>
    );
}
