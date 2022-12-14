import { useRef, useState } from "react";
import NavLink from '@/Components/Utils/NavLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import Dropdown from '@/Components/Dropdown';
import { IoIosArrowDown } from 'react-icons/io'
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
                    <img src="/logo.png" className="w-9 h-9" alt="" />
                    <h3 className="text-lg font-bold uppercase text-zinc-600 leading-5">
                        <span className="tracking-widest text-yellow-400">Analogue</span>
                        <br />
                        <span className="tracking-[1rem]">Shifts</span>
                    </h3>
                </Link>

                <div className="hidden md:block">
                    <div className="flex gap-7 text-lg font-semibold">
                        <Link href={route('about')}  className="find py-3 text-gray-500">About</Link>
                        <Link href={route('blogs')}  className="find py-3 text-gray-500">News</Link>
                        <Link href={route('hire.talents')} className="find py-3 text-gray-500">Hire Talent</Link>
                        <Link href={route('payment.package')}  className="find py-3 text-gray-500">Premium Plans</Link>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button
                                    type="button"
                                    className="inline-flex items-center find py-3 text-gray-500"
                                >
                                    <span className=''>Profile</span>

                                    <IoIosArrowDown />
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('dashboard')}>
                                    Dashboard
                                </Dropdown.Link>
                                <Dropdown.Link href={route('profile')}>
                                    Profile
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                        <Link href={route('hire.apply')}  className="find py-3 text-gray-500">Jobs</Link>
                        <Link href={route('contact')} className='bg-black text-white px-9 py-3 rounded-lg hover:bg-transparent hover:text-gray-500 hover:ring-2 ring-black'>Contact Us</Link>
                    </div>
                </div>

                <div className="flex gap-3 items-center md:hidden">
                
                    {/* {auth ? (
                        <Link className="border rounded-full p-3 text-gray-700 hover:text-red-500" href={route('logout')} method="post" as="button">
                            <BsLock className="text-xl"/>
                        </Link>
                    ) : (
                        <Link href={route('login')} className="border rounded-full p-3 text-gray-700 hover:text-green-500">
                            <BsUnlock className="text-xl"/>
                        </Link>
                    )} */}

                    <button onClick={() => setOpen(!open)} className="close-btn">
                        {open ? <GrClose /> : <MdMenu />}
                    </button>
                </div>

                <div className="nav-menu">

                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>Dashboard</NavLink>
                    <NavLink href={route('about')} active={route().current('about')}>about</NavLink>
                    <NavLink href={route('hire.apply')} active={route().current('hire.apply')}>jobs</NavLink>
                    <NavLink href={route('blogs')} active={route().current('blogs')}>news</NavLink>
                    <NavLink href={route('construction')} active={route().current('construction')}>vet your talent</NavLink>
                    <NavLink href={route('contact')} active={route().current('contact')}>contact</NavLink>

                    <NavLink href={route('hire.talents')} active={route().current('hire.talents')} className="find">
                        hire talent
                    </NavLink>

                    <NavLink href={route('payment.package')} active={route().current('package')}>Premium plans</NavLink>
                    <NavLink href={route('profile')} active={route().current('profile')}>profile</NavLink>

                </div>

            </div>
        </nav>
     );
}

export default Navbar;
