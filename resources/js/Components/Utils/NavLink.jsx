import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`flex gap-2 items-center text-xl capitalize font-medium hover:pl-5 py-3 hover:border-l-8 w-full hover:border-yellow-400 hover:text-yellow-400 ${
                active
                    ? 'flex gap-2 items-center text-xl capitalize font-medium p-3 hover:pl-5 py-3 border-l-8 w-full border-yellow-400 rounded bg-yellow-200 text-yellow-400 '
                    : 'flex gap-2 items-center text-xl capitalize font-medium pl-5 py-3 hover:border-l-8 w-full hover:border-yellow-400 hover:text-yellow-400'
            } hover:border-l-8 w-full hover:border-yellow-400 hover:text-yellow-400 transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
