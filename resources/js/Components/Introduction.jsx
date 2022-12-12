import {BsArrowRight} from 'react-icons/bs';
import 'tw-elements';


function Introduction() {
    
    return ( 
        <header className="grid justify-center gap-14 text-yellow-100 bg-[url('/images/isolated.jpg')] bg-yellow-500 px-5 md:px-48 py-32 md:py-48">
                
            <div className='grid gap-5 items-center'> 
                <h4 className="text-5xl font-black text-yellow-100">Introducing</h4>
                <div id="carouselExampleSlidesOnly" className="grid md:flex gap-3" data-bs-ride="carousel">
                    <h1 className='text-4xl font-black text-yellow-100'>The Future of </h1>
                    <div className="carousel-inner">
                        <div className="carousel-item active w-full">
                            <span className='flex items-center text-4xl font-black text-yellow-100'> Talent Recruitment</span>
                        </div>
                        <div className="carousel-item relative w-full">
                            <span className='flex items-center text-4xl font-black text-yellow-100'> Project Management</span>
                        </div>
                        <div className="carousel-item relative w-full">
                            <span className='flex items-center text-4xl font-black text-yellow-100'> Startup Development</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-9 justify-center items-center">
                <p className='flex items-center text-lg md:leading-loose'>
                    We are a dynamic and motivated team of people who share the same goal to find  the right talent for your company.    
                    We offer high quality services and will help you with anything we can from the recruitment stage up until you have made a final decision. 
                    We are here to understand exactly what kind of person you want,
                    to tailor our service to best fit your needs and deliver results for businesses in all industries.
                </p>
                <a href={route('hire.talents')} className='btn-lg md:my-10 bg-black hover:text-yellow-100 hover:ring-2 ring-black'>
                    <span>Find Top Talents</span>
                    <BsArrowRight />
                </a>
                <p className='text-lg font-semibold text-center'>
                    With a focus on cultural fit, talent acquisition and matching your candidate pool with the talent you need, we’re here to help. We believe in employees who are passionate about what they do, thoughtful and reliable, with a high level of integrity. Each day provides new challenges and opportunities. 
                </p>
            </div>
        </header>
     );
}

export default Introduction;