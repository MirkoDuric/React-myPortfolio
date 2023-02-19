import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function HeaderContent() {
  return (
    <div className="header-content-container">
      <h5 className="logoText">My Portfolio</h5>
      <div>
        <h4>
          <span>Hello</span>, I am
        </h4>
        <h2>Mirko Duric</h2>
        <h4>I'm a Front End Web Developer</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          dignissimos neque quidem accusamus, ipsa non obcaecati, veniam
          inventore reiciendis eligendi ea? Quas vitae dolorum aut veritatis
          ipsum fugit velit magni sed assumenda iure temporibus illum commodi
          quis dolor consequatur aliquam obcaecati libero sapiente sequi
          corrupti optio, laudantium voluptas. Modi, neque!
        </p>
        <Link to="/aboutme" className="btn">
          About Me
        </Link>
      </div>
      <FontAwesomeIcon icon="fa-square-instagram" />
    </div>
  );
}
