import { NavLink } from "react-router-dom";
export default function MenuSidebar() {
  const activeLinkStyle = {
    color: "#8d0801",
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
            ABOUT ME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services&work"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            SERVICES & WORK
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactform"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            CONTACT FORM
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
