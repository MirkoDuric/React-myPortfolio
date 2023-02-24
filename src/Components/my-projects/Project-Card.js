import "./Projects.css";
import myImg from "../img/meandthedog.jpg";
import { Link } from "react-router-dom";
export default function ProjectCard() {
  return (
    <div className="card">
      <div className="circle"></div>
      <div className="content">
        <h3>Project Name</h3>
        <p>
          Project description(ada dsadaf fasdfgsdgasgdg afsgasdgas sadfas fsfsa
          dsf asdf sadf asdfa sdaf sad d asdfasdf asdfsa dfasdfds sadfa fasd a)
        </p>
        <Link to={"/"} className="project-btn">
          to project
        </Link>
      </div>
      <img src={myImg}></img>
    </div>
  );
}
