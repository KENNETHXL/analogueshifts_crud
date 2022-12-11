import React from 'react'
import { Link } from '@inertiajs/inertia-react';


export default function ApplicationLogo() {
  return (
    <div>
        <Link href="/" className="flex gap-3">
            <img src="/logo.png" className="w-12 h-12" alt="" />
            <h3 className="md:text-xl text-lg font-bold uppercase text-zinc-600 leading-5">
                <span className="tracking-widest text-yellow-400">Analogue</span>
                <br />
                <span className="tracking-[1rem]">Shifts</span>
            </h3>
        </Link>
    </div>
  )
}
