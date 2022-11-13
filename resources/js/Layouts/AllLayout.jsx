import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

export default function All({ header, children }) {

    const auth = usePage().props.auth;
    return (
        <div className="min-h-screen bg-gray-100 pt-20">

            <Navbar />
           
            <main>{children}</main>

            <Footer />

        </div>
    );
}
