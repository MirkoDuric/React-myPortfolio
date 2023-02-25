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
        <Link to={"/"} className="project-btn">
          Take a look
        </Link>
      </div>
      <img src={props.projectImg}></img>
    </div>
  );
}
