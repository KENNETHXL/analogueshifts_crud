import { useRef, useState } from "react";
import Dropdown from '@/Components/Utils/Dropdown';
import NavLink from '@/Components/Utils/NavLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import {GrClose} from 'react-icons/gr';
import {MdMenu} from 'react-icons/md';
import {BsLock, BsUnlock} from 'react-icons/bs'


function Navbar({Guest}) {

    const navRef = useRef();
    const [open, setOpen] = useState(false);
    const auth = usePage().props.auth.user;


    return (
        <nav ref={navRef} className={"navbar "+(open && 'active')}>
            <div className="wrapper">
                <Link href="/" className="logo">
                    <img src="logo.png" className="w-12 h-12" alt="" />
                    <h3 className="md:text-xl text-lg font-bold uppercase text-zinc-600 leading-5">
                        <span className="tracking-widest text-yellow-400">Analogue</span>
                        <br />
                        <span className="tracking-[1rem]">Shifts</span>
                    </h3>
                </Link>

                <div className="flex gap-3 items-center">
                    {auth ? (
                        <Link className="border rounded-full p-3 text-gray-700 hover:text-red-500" href={route('logout')} method="post" as="button">
                            <BsLock className="text-xl"/>
                            {/* logout */}
                        </Link>
                    ) : (
                        <Link href={route('login')} className="border rounded-full p-3 text-gray-700 hover:text-green-500">
                            <BsUnlock className="text-xl"/>
                            {/* login */}
                        </Link>
                    )}
                    <button onClick={() => setOpen(!open)} className="close-btn">
                        {open ? <GrClose /> : <MdMenu />}
                    </button>
                </div>

                <div className="nav-menu">

                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>Dashboard</NavLink>
                    <NavLink href={route('vetting')} active={route().current('vetting')}>talent as a service</NavLink>
                    <NavLink href={route('blog.index')} active={route().current('blog.index')}>news</NavLink>
                    <NavLink href={route('about')} active={route().current('about')}>about</NavLink>
                    <NavLink href={route('learn.index')} active={route().current('learn.index')}>Learn</NavLink>
                    <NavLink href={route('vets')} active={route().current('vets')}>vet your talent</NavLink>

                    <NavLink href={route('talents')} active={route().current('talents')} className="find">
                        hire talent
                    </NavLink>

                    <NavLink href={route('package')} active={route().current('package')}>Premium plans</NavLink>
                    <NavLink href={route('profile')} active={route().current('profile')}>profile</NavLink>

                </div>

            </div>
        </nav>
     );
}

export default Navbar;
