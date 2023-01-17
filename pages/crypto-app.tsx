import React from 'react'
import Image from 'next/image'
import projectImg from "../public/assets/crypto-app.png"
import {RiRadioButtonFill} from "react-icons/ri";
import Link from 'next/link';

const dynamicresume = () => {
  return (
    <div className='w-full'>
      {/* lg:w-[40vh] */}
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={projectImg} 
          alt="crypto-app-project" />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] 
          translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Crypto App(Robinhood Mock)</h2>
            <h3>React JS / Tailwind / Firebase</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4 relative'>
            {/* <p>Project</p> */}
            <h2 className='pb-4 text-[#ff1516]'>Overview</h2>
            <p>This project is a custom web application that enables users to add crypto coins from a table to their watchlist with a fully functioning
login system with login verification using JWTs. In more depth, the users sign up using reactive form validation and once signed up, the user is 
added to the database which is MongoDB. Upon the user sucessfully logging in, they are granted both an access token and a refresh token. Which are the 
tokens that handles the logic of JWTs using cookies</p>
          <div className='absolute bottom-0'>
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>
            <a target="_blank" rel="noopener noreferrer" href="https://crypto-app-v2.netlify.app/loggedOutHome">
              Demo
            </a>
            </button>
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300'>
              <a target="_blank" rel="noopener noreferrer" href="https://crypto-app-v2.netlify.app/loggedOutHome">
              Code
              </a> 
            </button>
            <button className='px-8 py-2 mt-4 hover:scale-105 ease-in duration-300'>
             <Link href="/">Home</Link>
            </button>
          </div>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1 text-white'>
                {/* text-gray-600 */}
                <p className='py-2 flex items-center'>
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
