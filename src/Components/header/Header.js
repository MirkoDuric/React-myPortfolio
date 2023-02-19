import HeaderContent from "./HeaderContent";
import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <div className="header-container">
      <div className="header-img">
        <img src="/public/img/myportrait.jpg"></img>
      </div>
      <HeaderContent />
      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </div>
  );
}
