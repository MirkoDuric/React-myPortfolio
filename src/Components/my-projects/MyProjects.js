// Na dnu dugme koje vodi do githuba
import { useState } from "react";
import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import ProjectCard from "./Project-Card";
import myImg from "../img/myportrait.jpg";
export default function MyProjects() {
  const [active, setActive] = useState(false);
  const projectData = [
    {
      id: 1,
      projectName: "ToDo List",
      projectDescription:
        "This was my first biger project. I must say that this was one of the most interesting projects to work on. It's plain JS, with no DB. I learned a lot during this project and really enjoyed to work in this team! Our goal was to create ToDo List, we also created some login form, but the user would only be saved in a objects array and would disapier once the page is reloaded.",
      projectImg: require("../img/projects_tn/ToDoListProject.png"),
      projectLink: "https://mirkoduric.github.io/ToDoList-JS/",
    },
    {
      id: 2,
      projectName: "RecipesInc",
      projectDescription:
        "This project was my first DB project. I used React, PostgreQL as DB and plain CSS. Project shows 3 dishes from three diferent cousines. Preparation and ingredients. Main goal of this project was creating my own server and connecting my DB with my front end. Also learning how to work with realtional DB. Take a look, you might as well get the idea on what to cook this week!! ",
      projectImg: require("../img/projects_tn/RecipesInc-Project.png"),
      projectLink: "https://recipeinc.onrender.com",
    },
    {
      id: 4,
      projectName: "Movies app",
      projectDescription:
        "In this project I created my own little Movies DB. Every time I would like to watch something I can inform myself about the movie on my own site. Goal of this project was to practice my skills, to refresh my memory on some topics and to improve my coding. I used open API, plain CSS, React(JSX).",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 5,
      projectName: "What's my IP adress",
      projectDescription:
        "Here I am using two diferent open API's. This way I'm taking the IP adress of the person who is using the link, and based on that IP address locating them and presenting some basic data. Location, time, coutnry flag, and their provider. It's also one of the projects where we learned how to use API and work with data that we get.",
      projectImg: require("../img/projects_tn/What's-your-IP-project.png"),
      projectLink: "https://mirkoduric.github.io/What-s-my-IP/",
    },
    {
      id: 6,
      projectName: "Gig guide",
      projectDescription:
        "Gig Guide was a final project of my Bootcamp. Idea behind this project is tracking music events in your hometown. We used open API from Ticketmaster to present more popular artists. But also we created the option to create your own events if your an artist. This way local bands would be able to present their gigs, and we would have an easy way to get info about cool bar gigs to visit! ",
      projectImg: require("../img/myportrait.jpg"),
    },
  ];

  return (
    <div className="my-project-container">
      <div className="my-projects">
        <div className="projects-title">
          <h2>
            <span className="element-h2-span">{"<h2>"}</span>
            My Projects<span className="element-h2-span">{"</h2>"}</span>
          </h2>
          <p className="first-intro-paragraph">
            <span className="element-p-span">{"<p>"}</span>
            Here I would like to present some of my projects in order to show my
            learning path. I displayed couple of projects with higher relevance
            to my path.
            <span className="element-p-span">{"</p>"}</span>
          </p>
          <p className="second-intro-paragraph">
            <span className="element-p-span">{"<p>"}</span>
            These projects are not at it's finest. Some of them I left like that
            in order to show mylearning progres. If you click on the "Take a
            look" button it will take you to the site itself. But if you would
            like to see my github profile, just click{" "}
            <a href="https://github.com/MirkoDuric" target="_blank">
              here
            </a>
            . I have set irelevant repositories to private so you don't lose
            time while serching for projects where you can actualy see
            something."
            <span className="element-p-span">{"</p>"}</span>
          </p>
          <p className="third-intro-paragraph">
            <span className="element-p-span">{"<p>"}</span>
            Enyoj!
            <span className="element-p-span">{"</p>"}</span>
          </p>
        </div>
        {projectData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              projectImg={project.projectImg}
              projectLink={project.projectLink}
            />
          );
        })}
      </div>
      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </div>
  );
}
