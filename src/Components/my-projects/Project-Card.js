import "./Projects.css";
import { Link } from "react-router-dom";
export default function ProjectCard(props) {
  return (
    <div className="card">
      <div className="circle"></div>
      <div className="content">
        <h3>{props.projectName}</h3>
        <hr />
        <p>{props.projectDescription}</p>
        <button className="project-btn">
          <a href={props.projectLink} target="_blank">
            Take a look
          </a>
        </button>
      </div>
      <img src={props.projectImg}></img>
    </div>
  );
}
