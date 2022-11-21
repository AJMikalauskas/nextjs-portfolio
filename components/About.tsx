import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import professionalMe from "../public/assets/linkedinprofile.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <p className="py-2 text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          {/* Link to projects */}
            <Link to="projects" smooth={false} duration={250}>
                <p className="py-2 text-gray-600 underline cursor-pointer">
                    Check out some of my latest Projects
                </p>
            </Link>
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
