import { Link } from "react-router-dom";
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
          Welcome to my portfolio! <br />
          As a junior front-end developer, I'm eager to showcase my skills and
          passion for creating beautiful, user-friendly websites. In this
          portfolio, you'll find small-scale projects and more complex web
          applications, and each project reflects my knowledge and passion to
          learn and improve my skills.
        </p>
        <Link to="/aboutme" className="btn">
          About Me
        </Link>
      </div>
    </div>
  );
}
