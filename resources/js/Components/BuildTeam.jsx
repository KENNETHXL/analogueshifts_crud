import {BsArrowRight} from 'react-icons/bs';
import {RiProductHuntLine} from 'react-icons/ri';
import {AiOutlineFundProjectionScreen,
        AiOutlineFormatPainter
        } from 'react-icons/ai';
import {MdDeveloperMode} from 'react-icons/md';
import {SiAzuredevops} from 'react-icons/si';
import {TbBusinessplan, TbSocial, TbDeviceAnalytics } from 'react-icons/tb';
import {FcAssistant} from 'react-icons/fc';


function BuildTeam() {
    return ( 
        <div id='talent' className="build-team">

            <div className="cards">
            {/* {[1,2,3].map(el => (
                <div key={el}></div>
            ))} */}
                <div className='card'>
                    <img src='/images/1.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        Product Managers
                    </h3>
                    <p className="details">
                        Highly skilled product managers trained in the development and release of products. 
                        That is, create and manage the product roadmap, 
                        track product performance, and provide feedback to stakeholders.
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
                <div className='card'>
                    <img src='/images/2.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        Project Managers 
                    </h3>
                    <p className="details">
                        Hire skilled professionals who organize, plan, and execute projects within 
                        constraints like budgets and schedules. Also, lead entire teams, define project goals, 
                        communicate with stakeholders, and see a project through to its closure.
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
                <div className='card'>
                    <img src='/images/3.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        UI/UX
                    </h3>
                    <p className="details">
                        Hire skilled professionals who can identify new opportunities to create better user experiences. 
                        Aesthetically pleasing branding strategies help them effectively reach more customers. 
                        They also ensure that the end-to-end product or service journey meets desired outcomes.
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
                <div className='card'>
                    <img src='/images/4.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        Data analysts
                    </h3>
                    <p className="details">
                        Hire highly skilled data analysts trained in collecting and interpreting data, analysing results, 
                        reporting the results back to the relevant stakeholders.
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
                <div className='card'>
                    <img src='/images/5.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        Developers 
                    </h3>
                    <p className="details">
                        Hire skilled developers trained to build and create software and applications. In addition, 
                        our professionals can debug and execute a software application's source code. 
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
                <div className='card'>
                    <img src='/images/6.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        DevOps Engineers
                    </h3>
                    <p className="details">
                        Hire skilled professionals trained to oversee code release and combine an understanding of both engineering and coding. 
                        Our professionals can create and implement systems software, 
                        analyze data, and improve existing ones.
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
                <div className='card'>
                    <img src='/images/7.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        Business Analysts
                    </h3>
                    <p className="details">
                        Hire top business analysts trained in the how-to guide of improving processes, 
                        products, and services through data analysis
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
                <div className='card'>
                    <img src='/images/8.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        Virtual Assistants
                    </h3>
                    <p className="details">
                        Hire highly skilled virtual assistants that can perform tasks 
                        that are difficult or time-consuming and provide a level of convenience and flexibility. Schedule appointments, 
                        travel arrangements, manage email and social media accounts and provide customer service.
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
                <div className='card'>
                    <img src='/images/9.jpg' className='w-full h-60 rounded-md' />
                    <h3 className="title">
                        Social media managers
                    </h3>
                    <p className="details">
                        Hire top social media managers that can represent your company globally through your social channels. 
                        They are trained in the right tips for building a brand voice and online presence.
                    </p>
                    <a href={route('hire.talents')} className='btn-lg'>
                        <span>Find Top Talents</span>
                        <BsArrowRight />
                    </a>
                </div>  
            </div>


            <div className='bg-yellow-50 grid gap-3 space-y-9 p-3 md:p-16 pt-20 relative'>
                <img className='h-96 md:h-[450px] md:w-[500px] rounded-lg' src='images/10.jpg' alt=''/>
                <div className='flex flex-col gap-10 md:p-16 md:items-end md:absolute inset-y-18'>
                    <div className='bg-white md:w-2/3 rounded-lg shadow-lg space-y-5 p-4 md:p-9'>
                        <h1 className='heading'>
                            Talent Acquisition
                        </h1>
                        <p className="description">
                            A solutions-oriented, best in class talent acquisition service. Analogue shifts feature a wide range of curated jobs in tech. You can search our virtual job board for openings, go through the vetting process and post your resume to be searched and seen by prospective employers. Our workforce management solutions also help companies attract professionals from all functional areas to fill specific internal or external positions.
                        </p>
                        <a href={route('hire.talents')} className='btn-lg'>
                            <span>Find Top Talents</span>
                            <BsArrowRight />
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-yellow-50 grid gap-3 space-y-9 p-3 md:p-16 pt-20 relative'>
                <img className='h-96 md:hidden rounded-lg' src='images/11.jpg' alt=''/>
                <div className='flex flex-col gap-10 md:p-16 md:items-start md:absolute inset-y-16'>
                    <div className='bg-white md:w-2/3 rounded-lg shadow-lg space-y-5 p-4 md:p-9'>
                        <h1 className='heading'>
                            Get top talent on demand.
                        </h1>
                        <p className="description">
                            With our award-winning technology and proven processes in place, 
                            we help you deliver talent on time and ensure your customers get what they need.
                            <br/>The perfect people need to be found and we do that job very well! Apply to our Curated list of job openings(it’s free),
                            We are a leading recruitment agency providing a full-service human resource solution. We engage in extensive recruitment, selection worldwide. 
                            We provide pre-job interview assessment on behalf of our clients, who may be either temporary placement agencies or permanent employers. 
                            In addition, we help you optimize the productivity of your projects by coordinating outstanding people to work on them.
                        </p>
                        <a href={route('hire.talents')} className='btn-lg'>
                            <span>Find Top Talents</span>
                            <BsArrowRight />
                        </a>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img className='hidden md:block md:h-[500px] md:w-[600px] rounded-lg' src='images/11.jpg' alt=''/>
                </div>
            </div>
        </div>
     );
}

export default BuildTeam;