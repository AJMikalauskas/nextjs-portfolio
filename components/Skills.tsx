import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h1 className='py-4'>What I Can Do</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* REACT */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/react.png" alt="react-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                    </div>
                </div>
            </div>
            {/* Javascript */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/javascript.png" alt="javascript-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Javascript</h3>
                    </div>
                </div>
            </div>
            {/* HTML */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/html.png" alt="html-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            {/* CSS */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/css.png" alt="css-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            {/* Azure */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/azure.png" alt="azure-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Azure</h3>
                    </div>
                </div>
            </div>
             {/* Mongo */}
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/mongo.png" alt="mongo-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MongoDB</h3>
                    </div>
                </div>
            </div>
             {/* Node */}
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/node.png" alt="nodejs-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Node JS</h3>
                    </div>
                </div>
            </div>
             {/* Tailwind */}
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/tailwind.png" alt="tailwind-skill" width="64" height="64" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
