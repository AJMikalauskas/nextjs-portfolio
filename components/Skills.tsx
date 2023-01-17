import React from 'react'
import Image from 'next/image'
import reactSkill from "../public/assets/react.png";
import javascriptSkill from "../public/assets/javascript.png";
import htmlSkill from "../public/assets/html.png";
import cssSkill from "../public/assets/css.png";
import azureSkill from "../public/assets/azure.png";
import mongoSkill from "../public/assets/mongo.png";
import nodeSkill from "../public/assets/node.png";
import tailwindSkill from "../public/assets/react.png";


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-full p-2'>
      <div className='max-w-[1240px] mx-auto flex-col justify-center h-full'>
        <div className='p-4 mt-12'>
        <p className='text-xl tracking-widest uppercase text-[#ff1516]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* REACT */}
            <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={reactSkill} alt="react-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                    </div>
                </div>
            </div>
            {/* Javascript */}
            <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={javascriptSkill} alt="javascript-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Javascript</h3>
                    </div>
                </div>
            </div>
            {/* HTML */}
            <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={htmlSkill} alt="html-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            {/* CSS */}
            <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={cssSkill} alt="css-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            {/* Azure */}
            <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={azureSkill} alt="azure-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Azure</h3>
                    </div>
                </div>
            </div>
             {/* Mongo */}
             <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={mongoSkill} alt="mongo-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MongoDB</h3>
                    </div>
                </div>
            </div>
             {/* Node */}
             <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={nodeSkill} alt="nodejs-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Node JS</h3>
                    </div>
                </div>
            </div>
             {/* Tailwind */}
             <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={tailwindSkill} alt="tailwind-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
            </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
