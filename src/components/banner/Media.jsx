import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
const Media = () => {
  const handleClick = () => {
    window.location.href = 'mailto:anilprajapati0008@gmail.com';
  };
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/anilll/" target="_blank" className='bannerIcon  bg-gradient-to-r from-red-20 via-red-100 to-red-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80'>
                <button><FaLinkedinIn /></button>
            </a>

            <a onClick={handleClick} target="_blank" className='bannerIcon  bg-gradient-to-r from-red-20 via-red-100 to-red-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80'>
                <button><CgMail /></button>
            </a>
            
            <a href="https://leetcode.com/u/anilprajapati/" target="_blank" className='bannerIcon  bg-gradient-to-r from-red-20 via-red-100 to-red-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80'>
                <button><SiLeetcode /></button>
            </a>

            <a href="https://github.com/CodeCraftsmanX01" target="_blank" className='bannerIcon  bg-gradient-to-r from-red-20 via-red-100 to-red-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80'>
                <button><BsGithub /></button>
            </a>
            
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-2">
            <span className="bannerIcon  bg-gradient-to-r from-red-10 via-red-50 to-red-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon  bg-gradient-to-r from-red-10 via-red-50 to-red-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80">
              <FaReact />
            </span>
            <span className="bannerIcon  bg-gradient-to-r from-red-10 via-red-50 to-red-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80">
            <IoLogoNodejs />
            </span>
            <span className="bannerIcon  bg-gradient-to-r from-red-10 via-red-50 to-red-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80">
              <SiTailwindcss />
            </span>
            
          </div>
        </div>
      </div>
  )
}

export default Media