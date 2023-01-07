import {FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
// import {ImGithub} from 'react-icons/im';

function Footer() {
    return ( 
        <footer className="footer">

            <div className="wrapper">
                <div className="space-y-20">
                    <a href="/" className="logo flex gap-5">
                        <img src="logo.png" className="w-20 md:w-12" alt="" />
                        <h3 className="">
                            <span className="tracking-widest text-yellow-400">Analogue</span> 
                            <br />
                            <span className="tracking-[1rem]">Shifts</span>
                        </h3>
                    </a>

                    <div className="grid gap-3 font-semibold text-lg text-gray-100 font-sans">
                        <a href="tel:+2348155629064" target='blank'>Call: +2348155629064</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Mail: hello@analogueshifts.com</a>
                    </div> 

                    <div className="flex gap-5 text-4xl text-zinc-100 justify-center">
                        <a href="https://www.facebook.com/profile.php?id=100078666855898" target="blank"><FaFacebookSquare /></a>
                        <a href="https://www.instagram.com/analogueshifts_/" target="blank"><FaInstagram /></a>
                        <a href="https://twitter.com/AnalogueShifts" target="blank"><FaTwitter /></a>
                        {/* <a href="mailto:hello@analogueshifts.com" target='blank' target="blank"><ImGithub /></a> */}
                        <a href="https://www.linkedin.com/company/analogue-shifts/" target="blank"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="menu">
                    <div className="">
                        <li>Discover Talents</li>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>For Companies</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Enterprises</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Case Study</a>
                    </div>
                    <div className="">
                        <li>Find Work</li>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>For Technologies</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Learning Commuity</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Leadership Progam</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Resources</a>
                    </div>
                    <div className="">
                        <li>Analogue Shifts</li>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>About Us</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Events</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Blog</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Press Center</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Careers</a>
                    </div>
                    <div className="">
                        <li>Pages</li>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Privacy Policy</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Terms & Conditions</a>
                        <a href="mailto:hello@analogueshifts.com" target='blank'>Modern Slavery Statement</a>
                    </div>
                </div>
            </div>

            <p className="copy text-center col-span-4 text-lg text-zinc-100 mt-10">
                &copy; {new Date().getFullYear()} | All Rights Reserved
            </p>

        </footer>
     );
}

export default Footer;