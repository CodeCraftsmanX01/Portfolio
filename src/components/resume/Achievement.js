import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2020</p>
          <h2 className="text-4xl font-bold">University Level</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MSME INDIA."
            subTitle="project with India’s Department of Science and Technology.."
            result="Success"
            des="Contributed to a project with India's Department of Science and Technology, focusing on innovative solutions for technological advancements. Collaborated closely with experts to implement cutting-edge developments!"
          />
          <ResumeCard
            title="Built Startup."
            subTitle="Launched a startup within the MSME sector."
            result="Success"
            des="Launched a startup in the MSME sector, securing funding under MSME for real-time health monitoring solutions. Implemented innovative technology to enhance health monitoring capabilities, aimed at improving healthcare outcomes!"
          />
          <ResumeCard
            title="Robotics Competition."
            subTitle="Achieved the first prize in robotics competition."
            result="Success"
            des="It was an agriculture-based robot that tests soil health in real-time, providing crucial data to farmers. Demonstrated innovation and effective teamwork in developing impactful agricultural solutions.!"
          />
          <ResumeCard
            title="Paper writing."
            subTitle="Authored a paper at university level."
            result="Success"
            des="Authored a paper on machines and transformers, accepted for presentation at an IEEE international conference. Demonstrated expertise in the field and contributed valuable insights to advance technology in machinery and transformer systems!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
