import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import professionalMe from "../public/assets/linkedinprofile.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-full items-center mt-8">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 p-4">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#3b35e9]">About</p>
          <h2 className="py-4">Who I Am</h2>
          {/* text-gray-600 */}
          <p className="py-2 text-white">// I am not your normal developer</p>
          <p className="py-2 text-white">
          About 2 years ago, I started developing full stack applications and haven't looked back.
          I'm an enthusiastic Full Stack Developer, lifelong learner, and problem solver, familiar with frontend and backend development.
          I enjoy development because of its constantly changing nature and the satisfaction I get by solving difficult challenges.
          I'm looking for a position that challenges me daily and where I can grow into a valuable contributor very quickly. 
          </p>
          <p className="py-2 text-white">
          As a software engineer I'm actively seeking meaningful work where I feel I'm making an impact. 
          Ultimately I would like to engage in work that positively impacts our society. 
          Some of my experience includes some freelancing where I've specialized in <strong>ReactJS, C#, and Solidity</strong>.
          </p>
          {/* Link to projects */}
              {/* Should I link to dynamic resume project or just keep like a download */}
              <a target="_blank" rel="noopener noreferrer" href="../public/assets/UpdatedResume-1-10-23.pdf" download> 
                <h2 className="pt-12 text-white underline cursor-pointer text-center">
                    Check Out My Resume Here
                </h2>
              </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center
         p-4 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={professionalMe} alt="about-me" />
        </div>
      </div>
    </div>
  );
};

export default About;
