import { useRef, useState } from "react";
import { Link, usePage } from '@inertiajs/inertia-react';
import {AiOutlineVideoCameraAdd, AiFillFolderOpen} from 'react-icons/ai';
import {FaBlogger} from 'react-icons/fa';
import {BsPaypal} from 'react-icons/bs'
import {SiSpeedtest} from 'react-icons/si'
import {GrUserExpert} from 'react-icons/gr'


function StaffTab() {

    const navRef = useRef();
    const [open, setOpen] = useState(false);
    const auth = usePage().props.auth.user;


    return (
        

        <div className="">

            <div className='grid grid-cols-2 md:grid-cols-3 justify-center gap-2'>
            
                <Link href={route('learn.index')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-orange-400'>
                    <div className="flex justify-center">
                        <AiOutlineVideoCameraAdd className="w-12 h-12 border rounded-full p-2"/>
                    </div>
                    <span className=''>
                        Learn Dashboard
                    </span>
                </Link>
                <Link href={route('blog.index')} className='grid justify-center gap-3 order items-center p-5 w-full rounded-lg bg-blue-400'>
                    <div className="flex justify-center">
                        <FaBlogger className="w-12 h-12 border rounded-full p-2"/>
                    </div>
                    <span className=''>
                        Blog Dashboard
                    </span>
                </Link>
                <Link href={route('staff')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-indigo-400'>
                    <div className="flex justify-center">
                        <GrUserExpert className="w-12 h-12 border rounded-full p-2"/>
                    </div>
                    <span className=''>
                        Users
                    </span>
                </Link>
                <Link href={route('vet.index')} className='grid justify-center gap-3 rder items-center p-5 w-full rounded-lg bg-amber-400'>
                    <div className="flex justify-center">
                        <SiSpeedtest className="w-12 h-12 border rounded-full p-2"/>
                    </div>
                    <span className=''>
                        Analogue Vets
                    </span>
                </Link>
                <Link href={route('hire.index')} className='grid justify-center gap-3 order items-center p-5 w-full rounded-lg bg-violet-400'>
                    <div className="flex justify-center">
                        <AiFillFolderOpen className="w-12 h-12 border rounded-full p-2"/>
                    </div>
                    <span className=''>
                        Hire's
                    </span>
                </Link>
                <Link href={route('staff')} className='grid justify-center gap-3 border items-center p-5 w-full rounded-lg bg-green-400'>
                    <div className="flex justify-center">
                        <BsPaypal className="w-12 h-12 border rounded-full p-2"/>
                    </div>
                    <span className=''>
                        Payments
                    </span>
                </Link>
                
            </div>

        </div>

     );
}

export default StaffTab;
