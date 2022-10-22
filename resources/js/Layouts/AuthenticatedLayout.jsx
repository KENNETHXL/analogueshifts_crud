import React, { useState } from 'react';
import AdminNav from './Components/AdminNav';
import Navbar from './Components/Navbar';

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="min-h-screen bg-gray-100 py-20">

            {auth.user.role == ('admin') ? (
                <AdminNav />
            ):(
                <Navbar />
            )}


            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>

            
        </div>
    );
}
