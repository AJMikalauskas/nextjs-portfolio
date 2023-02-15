import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import professionalPicOfMe from "../public/assets/linkedinprofile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

// REGEX 
// const EMAIL_REGEX = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   if(name.length <= 0) {
//     toast("Name is a Required field and must be longer than 0 characters")
//     return;
//   }

//   const result = await axios.post("https://getform.io/f/7a1b4c30-8180-442b-bbd1-959005943d6a",{
//     name: name,
//     email: email,
//     message: message
//   })
//   }
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const resizeListener = () => {
  setWindowWidth(window.innerWidth);
  console.log(window.innerWidth);
};
window.addEventListener("resize", resizeListener);


  return (
    <div id="contact" className="w-full lg:h-screen">
      <ToastContainer position="top-center" />
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#ff1516]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                {/* Can put a dummy image here or picture of me */}
                {windowWidth >= 1024 && <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={professionalPicOfMe}
                  alt="contact-img"
                />}
              </div>
              <div>
                <h2 className="py-2">Alexander Mikalauskas</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I'm available for freelance, full-time, or contract positions.
                  Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4 ">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexander-mikalauskas/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedin/>
                    </div>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/AJMikalauskas">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub/>
                    </div>
                  </a>
                  <a target="_blank" rel="noopener noreferrer"  href='mailto://ajmikalauskas@hotmail.com'>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">

                {/* method="POST" action="https://getform.io/f/7a1b4c30-8180-442b-bbd1-959005943d6a" */}
                <form method="POST" action="https://getform.io/f/7a1b4c30-8180-442b-bbd1-959005943d6a">
                    {/* <div className="grid md:grid-cols-1 gap-4 w-full py-2"> */}
                        
                        {/* Name Field */}
                        <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2" htmlFor="">Name</label>
                            <input
                              className="border-2 rounded-lg p-3 flex border-gray-300 text-black" 
                              name="name" 
                              type="text" 
                              id="" />
                        </div>
                       
                       {/* Phone Number Field 
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2" htmlFor="">Phone Number</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300 text-black" name="phone" type="text" name="" id="" />
                        </div> 
                     </div> */}
                        {/* Subject Field */}
                        <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2" htmlFor="">Email</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300 text-black" name="email" type="email" id="" />
                        </div>
                        
                        {/* Message Field */}
                        <div className="flex flex-col py-2">
                            <label className="uppercase text-sm py-2" htmlFor="">Message</label>
                            <textarea className="border-2 rounded-lg p-3 flex border-gray-300 text-black" name="message" rows={10} />
                        </div>

                        {/* Submit Button */}
                        <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link to='main' smooth={true} duration={250}>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp size={30} className="text-[#ff1516]" />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
