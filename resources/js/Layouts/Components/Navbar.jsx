import { useRef, useState } from "react";
import Dropdown from '@/Components/Utils/Dropdown';
import NavLink from '@/Components/Utils/NavLink';
import { Link } from '@inertiajs/inertia-react';
import {GrClose} from 'react-icons/gr';
import {MdMenu} from 'react-icons/md';
import {BsLock} from 'react-icons/bs'

function Navbar({auth}) {

    const navRef = useRef();
    const [open, setOpen] = useState(false);

    
    return ( 
        <nav ref={navRef} className={"navbar "+(open && 'active')}> 
            <div className="wrapper">
                <a href="/" className="logo">
                    <img src="logo.png" className="w-12 h-12" alt="" />
                    <h3 className="md:text-xl text-lg font-bold uppercase text-zinc-600 leading-5">
                        <span className="tracking-widest text-yellow-400">Analogue</span> 
                        <br />
                        <span className="tracking-[1rem]">Shifts</span>
                    </h3>
                </a>

                <div className="flex gap-3 items-center">
                    {/* {props.auth.user ? ( */}
                        <Link className="border rounded-full p-3 text-gray-700 hover:text-red-500" href={route('logout')} method="post" as="button">
                            <BsLock className="text-xl"/>
                        </Link>
                    {/* ) : (
                        <>
                            <a href={route('login')} className="border rounded-full p-3 text-gray-700 hover:text-green-500">
                                <BsLock className="text-xl"/>
                            </a>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )} */}
                    <button onClick={() => setOpen(!open)} className="close-btn">
                        {open ? <GrClose /> : <MdMenu />}
                    </button>
                </div>

                <div className="nav-menu">
                        
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>Dashboard</NavLink>                
                    <NavLink href={route('vetting')} active={route().current('vetting')}>talent as a service</NavLink>
                    <NavLink href={route('blog')} active={route().current('blog')}>news</NavLink>
                    <NavLink href={route('about')} active={route().current('about')}>about</NavLink>
                    <NavLink href={route('blog')} active={route().current('blog')}>blog</NavLink>
                    <NavLink href={route('vets')} active={route().current('vets')}>vet your talent</NavLink>

                    <NavLink href={route('talents')} active={route().current('talents')} className="find">
                        hire talent
                    </NavLink>
                    

                </div>

            </div>
        </nav>
     );
}

export default Navbar;