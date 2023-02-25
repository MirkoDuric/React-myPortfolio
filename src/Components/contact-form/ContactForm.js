import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import { useState } from "react";
import "./Contact.css";
export default function ContactForm() {
  const [active, setActive] = useState(false);

  return (
    <section className="contact">
      <div className="contact-title">
        <h2>Contact Me</h2>
      </div>
      <div className="contactForm">
        <div className="row">
          <div className="col50">
            <input type="text" name="" placeholder="First Name"></input>
          </div>
          <div className="col50">
            <input type="text" name="" placeholder="Last Name"></input>
          </div>
        </div>
        <div className="row">
          <div className="col50">
            <input type="text" name="" placeholder="Email"></input>
          </div>
          <div className="col50">
            <input type="text" name="" placeholder="Phone"></input>
          </div>
        </div>
        <div className="row">
          <div className="col100">
            <textarea
              type="text"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col100">
            <input type="submit" value="Send" />
          </div>
        </div>
      </div>
      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </section>
  );
}
