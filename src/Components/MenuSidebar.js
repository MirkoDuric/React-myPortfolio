import { NavLink } from "react-router-dom";
export default function MenuSidebar() {
  const activeLinkStyle = {
    color: "#001427",
    background: "#00bcd4",
    boxShadow: "0 0 10px #00bcd4, 0 0 40px #00bcd4, 0 0 80px #00bcd4",
    borderRadius: "5px",
  };
  return (
    <div class="sidebar">
      <ul class="menu">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutme"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            MY STORY
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myprojects"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactform"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
