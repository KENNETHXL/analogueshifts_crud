import { useRef, useState } from "react";
import NavLink from '@/Components/Utils/NavLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import {AiOutlineVideoCameraAdd} from 'react-icons/ai';
import {FaBlogger} from 'react-icons/fa';
import {BsPaypal} from 'react-icons/bs'
import {SiSpeedtest} from 'react-icons/si'
import {AiFillFolderOpen} from 'react-icons/ai'


function AdminTab() {

    const navRef = useRef();
    const [open, setOpen] = useState(false);
    const auth = usePage().props.auth.user;


    return (
        

        <div className="">

            <div className='grid md:grid-cols-3 md:justify-center gap-2'>
            
                <Link href={route('learn.index')} className='flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-orange-400'>
                    <AiOutlineVideoCameraAdd className="w-12 h-12 border rounded-full p-2"/>
                    <span className=''>
                        Learn Dashboard
                    </span>
                </Link>
                <Link href={route('blog.index')} className='flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-blue-400'>
                    <FaBlogger className="w-12 h-12 border rounded-full p-2"/>
                    <span className=''>
                        Blog Dashboard
                    </span>
                </Link>
                <Link href={route('hire.myhire')} className='flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-indigo-400'>
                    <AiFillFolderOpen className="w-12 h-12 border rounded-full p-2"/>
                    <span className=''>
                        My Hire's
                    </span>
                </Link>
                <Link href={route('vet.index')} className='flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-amber-400'>
                    <SiSpeedtest className="w-12 h-12 border rounded-full p-2"/>
                    <span className=''>
                        Analogue Vets
                    </span>
                </Link>
                <Link href={route('hire.index')} className='flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-violet-400'>
                    <AiFillFolderOpen className="w-12 h-12 border rounded-full p-2"/>
                    <span className=''>
                        Hire's
                    </span>
                </Link>
                <Link href={route('payment.records')} className='flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-green-400'>
                    <BsPaypal className="w-12 h-12 border rounded-full p-2"/>
                    <span className=''>
                        Payments
                    </span>
                </Link>
                
            </div>

        </div>

     );
}

export default AdminTab;
