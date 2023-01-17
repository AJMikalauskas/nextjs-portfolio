import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ResumeIcon from "../public/assets/resume-icon-2.png"
import Image from 'next/image'
import ParticlesBackground from "./ParticlesBackground"

const Main = () => {
  return (
    <div className='w-full h-screen text-center bg-no-repeat bg-cover bg-center custom-img'>
        {/* <ParticlesBackground/> */}
        {/* Container div */}
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='bg-[#000] p-12 rounded-lg'>
                {/* text-gray-600 */}
                {/* text-gray-700 */}
                <h1 className='py-4 text-white'>Hi, I'm <span className='text-[#ff1516]'>Xander</span></h1>
                <h1 className='py-2 text-white'> A Full Stack Web Developer</h1>
                {/* text-gray-600 */}
                <p className='uppercase text-sm tracking-widest py-4 m-auto text-white'>LETS BUILD SOMETHING TOGETHER</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexander-mikalauskas/">
                            <FaLinkedin/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/AJMikalauskas">
                            <FaGithub/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                                {/* This is how you link to email --> found here: 
                                https://support.microsoft.com/en-us/office/add-a-return-email-mailto-link-in-a-message-86cea017-8f4e-4f20-85aa-0683779ccb0a */}
                        <a target="_blank" rel="noopener noreferrer"  href='mailto://ajmikalauskas@hotmail.com'>
                            <AiOutlineMail/>
                        </a>
                    </div>
                    {/* <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                                {/* This only downloads resume, should I ado anything else
                        <a target="_blank" rel="noopener noreferrer" href="../public/assets/ATSResume-11-21-22.pdf" download>
                            <Image src={ResumeIcon} alt="resume-icon-img" width={25} height={25} />
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
