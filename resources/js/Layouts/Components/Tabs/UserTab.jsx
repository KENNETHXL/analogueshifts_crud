import { useRef, useState } from "react";
import NavLink from '@/Components/Utils/NavLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import {AiOutlineVideoCameraAdd} from 'react-icons/ai';
import {FaBlogger} from 'react-icons/fa';
import {BsPaypal} from 'react-icons/bs'


function UserTab() {

    const navRef = useRef();
    const [open, setOpen] = useState(false);
    const auth = usePage().props.auth.user;


    return (
        

        <div className="">

            <div className='grid md:grid-cols-3 justify-center gap-2'>

                <Link href={route('learn.all')} className='flex justify-center gap-3 border items-center p-5 w-full bg-orange-400'>
                    <AiOutlineVideoCameraAdd />
                    <span className='p-2'>
                        Learn
                    </span>
                </Link>
                <Link href={route('blogs')} className='flex justify-center gap-3 border items-center p-5 w-full bg-blue-400'>
                    <FaBlogger />
                    <span className='p-2'>
                        Blog
                    </span>
                </Link>
                <Link href={route('learn')} className='flex justify-center gap-3 border items-center p-5 w-full bg-green-400'>
                    <BsPaypal />
                    <span className='p-2'>
                        Make Payments
                    </span>
                </Link>
                <Link href={route('construction')} className='flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-amber-400'>
                    <SiSpeedtest className="w-12 h-12 border rounded-full p-2"/>
                    <span className=''>
                        Analogue Vets
                    </span>
                </Link>
                
            </div>

        </div>

     );
}

export default UserTab;
