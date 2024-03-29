import ResumeIcon from "../public/assets/resume-icon.png"
import Image from 'next/image'
import { Link } from "react-scroll";
import React, { useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedin } from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { useRouter } from 'next/router';
import logo from "/public/assets/correctDimsLogo.png";

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState(true);
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    //#000
    const [navBg, setNavBg] = useState("transparent");
    //#1f2937
    const [linkColor, setLinkColor] = useState("#fff");
    const router = useRouter();
    // console.log(window.location.href);


    // If project route is clicked on, change navbar coloring to transparent and setLinkColor/smooth scrolling to white
    // else just set back to original values. 
    useEffect(() => {
        if(
            router.asPath == "/dynamic-resume" ||
            router.asPath == "/google-maps-travel-advisor" ||
            router.asPath == "/medium-blog-mock" ||
            router.asPath == "/crypto-app" 
        ) {
            setCurrentPage(false);
            setNavBg("transparent")
            setLinkColor("#f8f8f8")
        } else {
            setCurrentPage(true);
            //setNavBg("#ecf0f3");
           // setLinkColor("#1f2937");
        }
    }, [router])

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90 ) {
                setShadow(true);
            }else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])

  return (
    // border-b-8 border-white?
    <div style={{ backgroundColor: `${navBg}` }} className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100] "}>
        <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
            <Image src={logo} alt="logo" width="125" height="50" />
            <div className={currentPage ? '' : 'hidden'}>
                <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                    <Link to='main' smooth={false} duration={250} >
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link to='about' smooth={false} duration={250} >
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link to='skills' smooth={false} duration={250}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link to='projects' smooth={false} duration={250}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link to='contact' smooth={false} duration={250}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>

        {/* MENU */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src={logo} alt="logo" width="87" height="35" />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer '>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Lets build something legendary together!</p>
                    </div>
                </div>
                {/* MENU ITEMS */}
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link to='main' smooth={false} duration={250}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link to='about' smooth={false} duration={250}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                        </Link>
                        <Link to='skills' smooth={false} duration={250}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link to='projects' smooth={false} duration={250}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link to='contact' smooth={false} duration={250}>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Lets Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexander-mikalauskas/">
                                    <FaLinkedin/>
                                 </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AJMikalauskas">
                                    <FaGithub/>
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                                <a target="_blank" rel="noopener noreferrer"  href='mailto://ajmikalauskas@hotmail.com'>
                                    <AiOutlineMail/>
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                                <a target="_blank" rel="noopener noreferrer" href="../public/assets/ATSResume-11-21-22.pdf" download>
                                    <Image src={ResumeIcon} alt="resume-icon-img" width={25} height={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;