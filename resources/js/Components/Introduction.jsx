import {BsArrowRight} from 'react-icons/bs';
import 'tw-elements';


function Introduction() {
    
    return ( 
        // bg-[url('/images/isolated.jpg')]
        <header className="grid justify-center gap-9 text-black  md:bg-as px-5 py-16 md:py-20">
            <div className='grid justify-between md:grid-cols-2 gap-3'>
                <div className='md:p-9'>
                    <div className='grid gap-2 items-center'> 
                        <h4 className="text-5xl font-black text-black">Introducing</h4>
                        <h1 className='text-4xl font-black text-black py-4'>The Future of Talent Recruitment</h1>
                        {/* <div id="carouselExampleSlidesOnly" className="grid md:flex gap-3" data-bs-ride="carousel">
                            <div className="bg-yellow-700 py-2 px-3 rounded-md shadow-xl shadow-black carousel-inner">
                                <div className="carousel-item active w-full">
                                    <span className='bg-yellow-700 py-2 px-3 rounded-md shadow-xl shadow-yellow-900 flex items-center text-4xl font-black text-yellow-100'> Talent Recruitment</span>
                                </div>
                                <div className="carousel-item relative w-full">
                                    <span className='bg-yellow-700 py-2 px-3 rounded-md shadow-xl shadow-yellow-900 flex items-center text-4xl font-black text-yellow-100'> Project Management</span>
                                </div>
                                <div className="carousel-item relative w-full">
                                    <span className='bg-yellow-700 py-2 px-3 rounded-md shadow-xl shadow-yellow-900 flex items-center text-4xl font-black text-yellow-100'> Startup Development</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex flex-col gap-9 justify-start items-center md:items-start text-gray-800">
                        <p className='flex items-center text-lg md:leading-loose'>
                            We are a dynamic and motivated team of people who share the same goal to find  the right talent for your company.    
                            We offer high quality services and will help you with anything we can from the recruitment stage up until you have made a final decision. 
                            We are here to understand exactly what kind of person you want,
                            to tailor our service to best fit your needs and deliver results for businesses in all industries.
                        </p>
                        <p className='text-lg font-semibold items-center'>
                            With a focus on cultural fit, talent acquisition and matching your candidate pool with the talent you need, we’re here to help. We believe in employees who are passionate about what they do, thoughtful and reliable, with a high level of integrity. Each day provides new challenges and opportunities. 
                        </p>
                        <a href={route('hire.talents')} className='btn-lg bg-black hover:text-yellow-100 hover:ring-2 ring-black'>
                            <span>Find Top Talents</span>
                            <BsArrowRight />
                        </a>
                    </div>
                </div>
                <div className='grid justify-center md:grid-cols-2 gap-5'>
                    <div className='grid justify-center items-center rounded p-2 cursor-pointer relative'>
                        <img src='images/a1.jpg' className='grid justify-center items-center bg-gray-300 h-80 w-80 rounded-lg' alt='' />
                        <div className=' bg-transparent bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex justify-center items-center p-3 w-72 font-bold absolute inset-x-9 bottom-5'>
                            <span className='flex justify-center text-sm text-white'>
                                We are here to understand exactly what kind
                                of person you want, to tailor our service to
                                best fit your needs and deliver results for 
                                businesses in all industries.
                            </span>
                        </div>
                    </div>

                    <div className='grid justify-center items-center rounded p-2 cursor-pointer relative'>
                        <img src='images/a2.jpg' className='grid justify-center items-center bg-gray-300 h-80 w-80 rounded-lg' alt='' />
                        <div className=' bg-transparent bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex justify-center items-center p-3 w-72 font-bold absolute inset-x-9 bottom-5'>
                            <span className='flex justify-center text-sm text-white'>
                                With a focus on cultural fit, talent acquisition
                                and matching your candidate pool with the
                                talent you need, we’re here to help.
                            </span>
                        </div>
                    </div>

                    <div className='grid justify-center items-center rounded p-2 cursor-pointer relative'>
                        <img src='images/a3.jpg' className='grid justify-center items-center bg-gray-300 h-80 w-80 rounded-lg' alt='' />
                        <div className=' bg-transparent bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex justify-center items-center p-3 w-72 font-bold absolute inset-x-9 bottom-5'>
                            <span className='flex justify-center text-sm text-white'>
                                We believe in employees who are passionate
                                about what they do, thoughtful and reliable,
                                with a high level of integrity.
                            </span>
                        </div>
                    </div>

                    <div className='grid justify-center items-center rounded p-2 cursor-pointer relative'>
                        <img src='images/a4.jpg' className='grid justify-center items-center bg-gray-300 h-80 w-80 rounded-lg' alt='' />
                        <div className=' bg-transparent bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex justify-center items-center p-3 w-72 font-bold absolute inset-x-9 bottom-5'>
                            <span className='flex justify-center text-sm text-white'>
                                We are here to understand exactly what kind
                                of person you want, to tailor our service to
                                best fit your needs and deliver results for 
                                businesses in all industries.
                            </span>
                        </div>
                    </div>

                </div>  
            </div>
        </header>
     );
}

export default Introduction;