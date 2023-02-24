// Na dnu dugme koje vodi do githuba
import { useState } from "react";
import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import ProjectCard from "./Project-Card";
export default function MyProjects() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="my-projects">
        <ProjectCard />
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
