import {BsArrowRight} from 'react-icons/bs';


function Introduction() {
    return ( 
        <header className="grid justify-center gap-5 bg-yellow-400 px-5 md:px-10 py-36">
            <div className='grid md:grid-cols-2 gap-9 md:pr-5'>
                <div>
                    <img className='shadow-lg rounded-r rounded-full hidden md:block' src='images/isolated.jpg' alt=''/>
                </div>
                <div className='grid space-y-5 gap-5'>
                    <div className='grid gap-3 items-center'>
                    
                        <h4 className="text-4xl font-black text-black">Introducing The</h4>
                        <h1 className='text-4xl font-black text-black'>The Future of Talent Recruitment</h1>
                    
                        <p className='flex items-center text-lg md:leading-loose'>
                            "We are a dynamic and motivated team of people who share the same goal to find  the right talent for your company.    
                            We offer high quality services and will help you with anything we can from the recruitment stage up until you have made a final decision. 
                            We are here to understand exactly what kind of person you want,
                            to tailor our service to best fit your needs and deliver results for businesses in all industries."
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-9 justify-center items-center">
                <p className='text-lg md:py-10 font-semibold'>
                    With a focus on cultural fit, talent acquisition and matching your candidate pool with the talent you need, we’re here to help. We believe in employees who are passionate about what they do, thoughtful and reliable, with a high level of integrity. Each day provides new challenges and opportunities. 
                </p>
                <a href="mailto:hello@analogueshifts.com" target='blank' className='btn-lg bg-black hover:text-black 
                    hover:ring-2 ring-black'>
                    <span>Find Top Talents</span>
                    <BsArrowRight />
                </a>
            </div>
        </header>
     );
}

export default Introduction;