import { NavLink } from "react-router-dom";
export default function MenuSidebar() {
  const activeLinkStyle = {
    color: "#00bcd4",
    borderBottom: "1px solid #00bcd4",
  };
  return (
    <div class="sidebar">
      <ul class="menu">
        <li>
          <NavLink
            to="/React-myPortfolio"
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
