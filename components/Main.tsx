import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        {/* Container div */}
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LETS BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Xander</span></h1>
                <h1 className='py-2 text-gray-700'> A Full Stack Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I'm an enthusiastic Junior Full Stack Developer, lifelong learner, and problem solver familiar with frontend and backend development. I enjoy development because of its constantly changing nature and the satisfaction I get by solving difficult challenges. I'm looking for a position that challenges me daily and where I can grow into a valuable contributor very quickly. I specialize in ReactJS, C#, and Solidity.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                        <FaLinkedin/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
                            ease-in duration-300'>
                        <BsPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
