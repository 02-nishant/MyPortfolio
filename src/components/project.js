import { useState } from "react";
import ProjectCard from "./projectCard";
import Title from "./title";
import e from "../assets/images/e.png";
import p from "../assets/images/p.jpg";

const Project = () => {

  const [ProjectList, setProjectList] = useState([
    {
      title: "Portfolio Website",
      desc: "Dive into my portfolio website, built with React! It's a snazzy space where you can see my projects and skills in action. The site is user-friendly, giving you a smooth experience as you explore my professional journey. It's not just a webpage; it's a dynamic showcase of what I bring to the table!",
      src: p
    },
    {
      title: "E-commerce Website",
      desc: "Welcome to my E-commerce Website! Experience a seamless online shopping journey powered by HTML, CSS, and JavaScript for an engaging front-end design. Behind the scenes Java, Servlet, and Hibernate framework drive the robust back-end functionalities, ensuring a secure and efficient user experience. ",
      src: e
    }
  ]);

  return (
    <div className="w-full py-20 border-b-[1px] border-b-black">

      <div className="flex justify-center items-center text-center">
        <Title title="My Awesome Portfolio" desc="My Projects" />
      </div>

      <div className="grid grid-cols-3 gap-15">


        {ProjectList.map((project) => (
          <ProjectCard title={project.title} desc={project.desc} src={project.src} />
        ))}


      </div>

    </div>
  );
};

export default Project;
