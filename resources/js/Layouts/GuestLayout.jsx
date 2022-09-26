import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Logo from '@/Components/Utils/Logo';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 p-3 bg-yellow-50">
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-yellow-200 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
