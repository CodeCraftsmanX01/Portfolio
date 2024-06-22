import React from 'react'
import Title from '../layouts/Title'
import { project1, project2, project3, project4, project5, project6} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Brahma-Kamal"
          des=" •	Developed a resort booking website from scratch using HTML,
           CSS, JavaScript, and React for the frontend, and Java, Spring boot  for backend"
          link="https://github.com/CodeCraftsmanX01/Village-lodge-booking" 
          src={project1}
        />
        <ProjectsCard
          title="Ed-Tech Website"
          des=" •	Designed and developed an educational platform that boosted student engagement and improved learning outcomes."
          link="https://github.com/CodeCraftsmanX01/Ed-Tech"
          src={project2}
        />
        <ProjectsCard
          title="Anti-Ragging Website"
          des="•	Developed a website using Java, JavaScript, React.js for a college project to help students report and 
          complain about ragging to college authorities."
          src={project3}
        />
        <ProjectsCard
          title="Portfolio"
          des=" Crafted my portfolio website using Javascript,html, tailwind, ensuring an engaging seamless navigation. Hosted on a cloud platform for reliability and accessibility"
          src={project4}
        />
        <ProjectsCard
          title="Health-Monitoring"
          des="Project is under mentorship of Department of scince and technology,india. Real time monitoring system is developed for chronic disease
                management."
          src={project5}
        />
        <ProjectsCard
          title="To-do"
          des=" Crafted a React.js to-do app with drag-and-drop functionality, seamlessly synchronized across devices via Firebase Realtime Database."
          src={project6}
        />
      </div>
    </section>
  );
}

export default Projects