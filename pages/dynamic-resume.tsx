import React from 'react'
import Image from 'next/image'
import projectImg from "../public/assets/dynamic-resume.png"
import {RiRadioButtonFill} from "react-icons/ri";
import Link from 'next/link';

const dynamicresume = () => {
  return (
    <div className='w-full'>
      {/* lg:w-[40vh] */}
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={projectImg} 
          alt="dynamic-resume-project" />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] 
          translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Dynamic Resume</h2>
            <h3>React JS / Tailwind / Firebase</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4 relative'>
            <h2 className='pb-4 text-[#3b35e9]'>Overview</h2>
            <p>This full stack web app is a custom web application that shows different resumes formatted like top-level tech companies including Microsoft,
Google, and Facebook; Each has its own unique design which were designed using Figma. On the main page there is also a newsletter signup that signs you up to a newsletter 
using the Mailchimp API. </p>
            <div className='absolute bottom-0'>
              <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>
                <a target="_blank" rel="noopener noreferrer" href="https://next-js-dynamic-resume.vercel.app/">
                  Demo
                </a>
              </button>
              <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/AJMikalauskas/Next-JS-Dynamic-Resume">
                Code
              </a>
              </button>
              <button className='px-8 py-2 mt-4 hover:scale-105 ease-in duration-300'>
                <Link href="/">Home</Link>
              </button>
            </div>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2 text-white '>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                {/* text-gray-600 */}
                <p className=' py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/> React
                </p>
                <p className='py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/> Tailwind
                </p>
                <p className='py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/> Javascript
                </p>
                <p className='py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/> Azure
                </p>
                <p className='py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/> MongoDB
                </p>
                <p className='py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1'/> Express
                </p>
              </div>
            </div>
          </div>
          {/* <Link href="/projects">
            <p className='underline cursor-pointer'>Home</p>
          </Link> */}
        </div>
    </div>
  )
}

export default dynamicresume
