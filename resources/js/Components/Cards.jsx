
function Cards() {
    return ( 
        <section id="top" className="card-section">

            <div className="p-5 md:p-20 space-y-32 bg">
                
                <div className="grid md:grid-cols-2 gap-9">

                    <div className="grid rounded-lg">
                        <div className="h-96 w-80 md:h-[30rem] bg-zinc-300 rounded-lg w-full">
                            <img className="rounded-lg h-full w-full" src="images/team.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="p-2 space-y-5">
                        <h4 className="text-xl font-bold text-yellow-400 tracking-wider">
                            AVOID DELAYS AND BAD HIRES
                        </h4>
                        <h3 className="text-3xl font-medium text-zinc-700">
                            Top Talent on Demand
                        </h3>
                        <p className="text-lg text-zinc-700 md:w-3/4">
                            Our team of expert Project Managers will bring your ideas to life within given constraints.
                        </p>
                        <ul className="text-lg text-zinc-600 px-5 md:p-0">
                            <li className='list-disc md:list-inside'>
                                We solve the problem of cost of hiring efficient staff.
                            </li>
                            <li className='list-disc md:list-inside'>
                                We are available to work round the clock.
                            </li>
                            <li className='list-disc md:list-inside'>
                                Large and diverse talent pool.
                            </li>
                            <li className='list-disc md:list-inside '>
                                Our recruiting services are built specifically for remote workers so you can be assured of receiving consistent support and guidance from your team every step of the way - from candidate screening all the way through to making a hire decision.
                            </li>
                        </ul>

                        <a href="mailto:hello@analogueshifts.com" target='blank' className="learn-more">
                            Learn More
                        </a>

                    </div>

                </div>

            </div>
            
            

        </section>
     );
}

export default Cards;