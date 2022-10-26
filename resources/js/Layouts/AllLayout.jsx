import { usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import AdminNav from './Components/AdminNav';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

export default function All({ header, children }) {

    const auth = usePage().props.auth;
    return (
        <div className="min-h-screen bg-gray-100 pt-20">

            {/* {auth.user.role == ('admin') ? (
                <AdminNav />
            ):( */}
                <Navbar />
            {/* )} */}

            <main>{children}</main>

            <Footer />

        </div>
    );
}
