import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import { useState } from "react";
import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [active, setActive] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vtkajy2",
        "template_6tuqz25",
        form.current,
        "tpLiBVvKMei9R332a"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-title">
        <h2>Contact Me</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <div className="row">
          <div className="col50">
            <input
              type="text"
              name="First_name"
              placeholder="First Name"
            ></input>
          </div>
          <div className="col50">
            <input type="text" name="Last_name" placeholder="Last Name"></input>
          </div>
        </div>
        <div className="row">
          <div className="col50">
            <input type="text" name="email" placeholder="Email"></input>
          </div>
          <div className="col50">
            <input type="text" name="phone" placeholder="Phone"></input>
          </div>
        </div>
        <div className="row">
          <div className="col100">
            <textarea
              type="text"
              name="message"
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
      </form>
      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </section>
  );
}
