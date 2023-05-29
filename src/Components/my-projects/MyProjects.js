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
        "This was my first biger project. I must say that this was one of the most interesting projects to wokr on. It's plain JS, with no DB. I learned a lot during this project and really enjoyed to work in this team!",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 2,
      projectName: "RecipesInc",
      projectDescription:
        "This project was my first DB project. I used React, PostgreQL as DB and plain CSS. Project shows 3 dishes from three diferent cousines. Preparation and ingredients. Take a look, you might as well get the idea on what to cook this week!!",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 3,
      projectName: "Restourants in Köln",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 4,
      projectName: "Movies app",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 5,
      projectName: "What's my IP adress",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 6,
      projectName: "Gig guide",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
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
            like to see my github profile, just click here. I have set irelevant
            repositories to private so you don't lose time while serching for
            projects where you can actualy see something."
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
