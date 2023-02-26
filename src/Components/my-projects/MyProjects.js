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
      projectName: "Pomodoro-app",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 2,
      projectName: "Pomodoro-app",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 3,
      projectName: "Pomodoro-app",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 4,
      projectName: "Pomodoro-app",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 5,
      projectName: "Pomodoro-app",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
    {
      id: 6,
      projectName: "Pomodoro-app",
      projectDescription:
        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.[1] It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
      projectImg: require("../img/myportrait.jpg"),
    },
  ];

  return (
    <div className="my-project-container">
      <div className="my-projects">
        <div className="projects-title">
          <h2>My Projects</h2>
          <hr className="hr-title" />
          <p>
            Here I would like to present some of my projects in order to show my
            learning path. I hope you will injoj!
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
