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
      <div className="scroll-layout">
        <div className="contact-intro">
          <h2>
            <span className="element-h2-span">{"<h2>"}</span>Contact me
            <span className="element-h2-span">{"</h2>"}</span>
          </h2>
          <p className="first-intro-paragraph">
            <span className="element-p-span">{"<p>"}</span>If you like what you
            saw, or you would like to have a chat with me feel free to contact
            me via E-mail.<span className="element-p-span">{"<p>"}</span>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className="row">
            <div className="col50">
              <input
                type="text"
                name="First_name"
                placeholder="First Name"
                required
              ></input>
            </div>
            <div className="col50">
              <input
                type="text"
                name="Last_name"
                placeholder="Last Name"
                required
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col50">
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="col50">
              <input
                type="text"
                name="phone"
                placeholder="Phone (optional)"
              ></input>
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
                required
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
      </div>
    </section>
  );
}
