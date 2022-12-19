import { useRef, useState } from "react";
import NavLink from '@/Components/Utils/NavLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import {AiOutlineVideoCameraAdd} from 'react-icons/ai';
import {FaBlogger} from 'react-icons/fa';
import {BsPaypal} from 'react-icons/bs'
import {SiSpeedtest} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
import {AiFillFolderOpen} from 'react-icons/ai'


function UserTab() {

    const navRef = useRef();
    const [open, setOpen] = useState(false);
    const auth = usePage().props.auth.user;


    return (
        

        <div className="">

            <div className='grid grid-cols-2 md:grid-cols-3 justify-center gap-2'>

                <Link href={route('profile')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-green-400'>
                    <div className="flex justify-center">
                        <CgProfile className="w-12 h-12 border rounded-full p-2" />
                    </div>
                    <span className=''>
                        Profile
                    </span>
                </Link>
                <Link href={route('learn.all')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-orange-400'>
                    <div className="flex justify-center">
                        <AiOutlineVideoCameraAdd className="w-12 h-12 border rounded-full p-2" />
                    </div>
                    <span className=''>
                        Learn
                    </span>
                </Link>
                <Link href={route('blogs')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-blue-400'>
                    <div className="flex justify-center">
                        <FaBlogger className="w-12 h-12 border rounded-full p-2" />
                    </div>
                    <span className=''>
                        Blog
                    </span>
                </Link>
                <Link href={route('construction')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-amber-400'>
                    <div className="flex justify-center">
                        <SiSpeedtest className="w-12 h-12 border rounded-full p-2" />
                    </div>
                    <span className=''>
                        Analogue Vets
                    </span>
                </Link>
                <Link href={route('hire.myhire')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-indigo-400'>
                    <div className="flex justify-center">
                        <AiFillFolderOpen className="w-12 h-12 border rounded-full p-2"/>
                    </div>
                    <span className=''>
                        My Hire's
                    </span>
                </Link>
                <Link href={route('payment.index')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-violet-400'>
                    <div className="flex justify-center">
                        <BsPaypal className="w-12 h-12 border rounded-full p-2" />
                    </div>
                    <span className=''>
                        Make Payment
                    </span>
                </Link>
                
            </div>

        </div>

     );
}

export default UserTab;
