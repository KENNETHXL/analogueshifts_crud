import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';
import Introduction from "@/Components/Introduction";
import Companies from "@/Components/Companies";
import BuildTeam from "@/Components/BuildTeam";
import Cards from "@/Components/Cards";
import { HiresComp } from '@/Pages/OpenHire';
import About from "@/Components/About";

export default function Welcome(props) {
    return (
        <All>
            <Head title="Welcome" />
            <div className="home">
                
                <Introduction />
                <Companies />
                <BuildTeam />
                <Cards />
                <HiresComp hires={props.hires} />
                {/* <About/> */}
                
            </div>
        </All>
    );
}
