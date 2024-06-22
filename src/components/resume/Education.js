import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Electrical and Electronics"
            subTitle="Dr. A.P.J. Abdul Kalam Technical University (2016 - 2020)"
            result="8.04/10"
            des="My college projects sparked my interest in software development. With support from my college, I pursued coding and transitioned into a software development career."
          />
          <ResumeCard
            title="Higher Secodary School Education"
            subTitle="Madhya Pradesh board of secondary education (2015 - 2016)"
            result="7/10"
            des="In high school, I found a passion for technology, which led to my B.Tech in Electrical and Electronics and a strong interest in software development."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kendriya Vidyalaya,Panna, School (2012 - 2013)"
            result="7.4/10"
            des="In secondary school (10th grade), I began learning about HTML and CSS, sparking my interest in technology and laying the foundation for my journey into software development."
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education