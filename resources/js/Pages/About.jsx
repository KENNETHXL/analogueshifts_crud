import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import All from '@/Layouts/AllLayout';
import About from '@/Components/About';

export default function Blog(props) {
    return (
        <All>
            <Head title="About" />
            <div className="home min-h-screen">

              <About />  
                
            </div>
        </All>
    );
}
