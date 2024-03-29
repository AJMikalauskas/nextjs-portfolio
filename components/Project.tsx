import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../typings';

interface Props {
    project: Project;
}

const Project = ({ project }: Props) => {

    const { projectName, techStack, image, projectUrl } = project;

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl
    p-4 group hover:bg-gradient-to-r from-[#ff1516] to-[#df8282]'>
        <Image className='rounded-xl group-hover:opacity-10' src={image} alt="project-img" />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{projectName}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{techStack}</p>
            <Link href={projectUrl}> 
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                    More Info
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Project
