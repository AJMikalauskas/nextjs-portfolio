import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DynamicResumeImg from "../public/assets/dynamic-resume.png"
import CryptoAppImg from "../public/assets/crypto-app.png"
import MediumBlogMockImg from "../public/assets/medium-blog-mock.png"
import GoogleMapsFiltererImg from "../public/assets/google-maps-filterer.png";
import Project from './Project'

// Connect To Backend?
// Need id for key, part of uniqueness of items when mapping items.
const projectsData = [
    {
        projectUrl: "dynamic-resume",
        techStack: "React JS",
        projectName: "Dynamic Resume",
        image: DynamicResumeImg,
    },
    {
        projectUrl: "crypto-app",
        techStack: "React JS",
        projectName: "Crypto App",
        image: CryptoAppImg,
    },
    {
        projectUrl: "medium-blog-mock",
        techStack: "React JS, Next JS",
        projectName: "Medium Blog Mock",
        image: MediumBlogMockImg,
    },
    {
        projectUrl: "google-maps-travel-advisor",
        techStack: "React JS",
        projectName: "Google Maps Travel Advisor",
        image: GoogleMapsFiltererImg,
    },
]

const Projects = () => {
    return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#ff1516]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        {projectsData.map((projectData) => (
            <Project key={projectData.projectUrl} project={projectData} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
