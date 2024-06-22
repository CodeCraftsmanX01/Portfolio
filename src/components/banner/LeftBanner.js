import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.","Front-End Developer.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

    
    const handleClick = () => {
      window.location.href = 'mailto:anilprajapati0008@gmail.com';
    };

    const handleDownload = () => {
      fetch("file.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Anil prajapati resume.pdf";
            alink.click();
        });
    });
    };

    
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-xl font-extrabold font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Anil Prajapati</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a Software developer and here is my portfolio website.
                        Here you'll learn about my journey as a software developer.
                        I'm currently available for the next project.<br/>
                        Looking for a full-stack engineer who can develop your idea?
        </p>
        <div className='realtive w-full flex gap-24 mt-4 mb-0'>
            <a onClick={handleClick}class="relative px-6 py-3 font-bold text-black group mb-3">
            <span class="absolute flex items-center justify-center inset-0  w-64 h-14 transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80 font-medium rounded-3xl group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-64 h-14 border-2 border-white rounded-3xl"></span>
            <span class="relative font-extrabold">If So Let Me Know</span>
            </a>
            <a onClick={handleDownload}class="relative px-6 py-3 font-bold text-black group flex">
            <span class="absolute inset-0 w-64 h-14 transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-gradient-to-r from-red-100 via-red-300 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-500/80 font-medium rounded-3xl group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-64 h-14 border-2 border-white rounded-3xl"></span>
            <span class="relative flex justify-center align-center font-extrabold">Download Resume</span>
            </a>
        </div>
        

        
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner