import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import { useState, useEffect } from "react";
import "./AboutMe.css";
import useWindowsResize from "../../useWindowResize";

export default function AboutMe() {
  const [active, setActive] = useState(false);

  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });
  const removeActiveClasses = () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  };
  return (
    <div>
      <main className="aboutme-container">
        <article className="intro-about-me">
          <p>
            {`<h3>`}
            <span>Hello there</span>, this is my short story. I hope you'll
            enyoj it and that it will give you an idea about my background and
            who I am as a person.{`</h3>`}
          </p>
        </article>
        <article className="cards-container">
          <div className="panel active">
            <h3>Introduction</h3>
            <hr className="hr-section-title-aboutme" />
            <div className="p-scroll">
              <p>
                Hello and welcome to my profile! My name is Mirko Duric, and I'm
                a 26-year-old Web Developer, originaly from Bosnia and
                Herzegovina but stationd in Munich, Germany. I have a strong
                passion for creativity and innovation, which is what led me to
                pursue a career in Web Development. In this profile, I'll be
                sharing more about my background and my skills.
              </p>
            </div>
          </div>
          <div className="panel">
            <h3>Professional Background</h3>
            <hr className="hr-section-title-aboutme" />
            <div className="p-scroll">
              <p>
                I started my professional career as a medical worker
                (Krankenpfleger) at the University Hospital in Heidelberg,
                Germany in November 2018. While working in ICU before and during
                the COVID-19 pandemic, I experienced the importance of teamwork
                and collaboration. I was highly motivated and worked hard which
                led to obtaining my B2 German certificate after 4 months and my
                German working license (Urkunde) after passing my exam
                (Anerkennung) within just 9 months of arriving in Germany. After
                a few years of working in the medical field, I realized that I
                needed a new challenge.
              </p>
            </div>
          </div>
          <div className="panel">
            <h3>Skills and Hobbies</h3>
            <hr className="hr-section-title-aboutme" />
            <div className="p-scroll">
              <p>
                As someone who enjoys being challenged and seeking new
                experiences, I decided to pursue a career in Web Development.
                Before starting my Web Development Bootcamp at WBS Coding
                School, I was learning on my own to see if I had what is needed
                for coding. After learning some coding on my own, I decided to
                enroll in the WBS Coding School bootcamp to improve my skills.
                During the bootcamp, I learned various front-end and back-end
                technologies, such as HTML, CSS, JavaScript, React, Node.js, and
                MongoDB. Aside from my professional work, I also have a passion
                for photography. I find great satisfaction in creating something
                that never existed before, whether it's a piece of code or a
                photograph. I believe that this creativity and attention to
                detail are the things that give me that extra something, and
                that it could be helpfull tool in my jurney to become successful
                developer.
              </p>
            </div>
          </div>
          <div className="panel">
            <h3>Conclusion</h3>
            <hr className="hr-section-title-aboutme" />
            <div className="p-scroll">
              <p>
                Thank you for taking the time to read my profile. As a Web
                Developer, I am constantly seeking out new challenges and
                opportunities to push my skills and knowledge further. Whether
                it's working on a new project or collaborating with other
                professionals in the industry, I am always excited to take on
                new challenges and grow as a person and developer.
              </p>
            </div>
          </div>
        </article>
      </main>
      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </div>
  );
}
