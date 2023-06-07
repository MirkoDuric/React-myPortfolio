import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import { useState } from "react";
import "./AboutMe.css";
import MeAndTheDogImg from "../img/meandthedog.jpg";
import AboutMePortret from "../img/portrait-about-me.jpg";

export default function AboutMe() {
  const [active, setActive] = useState(false);
  const [activPanelOne, setActivePanelOne] = useState(true);
  const [activPanelTwo, setActivePanelTwo] = useState(false);
  const [activPanelThree, setActivePanelThree] = useState(false);
  const [activPanelFour, setActivePanelFour] = useState(false);

  return (
    <div>
      <main className="aboutme-container">
        <article className="intro-about-me">
          <p>
            {`<h3>`}
            <span className="hello-span">Hello there</span>, this is my short
            story. I hope you'll enyoj it.{`</h3>`}
          </p>
        </article>
        <article className="cards-container">
          <div
            className={activPanelOne ? "panel active" : "panel"}
            onClick={() => {
              setActivePanelTwo(false);
              setActivePanelFour(false);
              setActivePanelThree(false);
              setActivePanelOne(true);
            }}
          >
            <h3>Introduction</h3>
            <hr className="hr-section-title-aboutme" />
            <div className="p-scroll">
              <div className="intro-div">
                <img className="aboutme-img-one" src={MeAndTheDogImg}></img>
                <p>
                  Hello and welcome to my profile! My name is Mirko Duric, and
                  I'm a 26-year-old Web Developer, originaly from Bosnia and
                  Herzegovina but stationd in Munich, Germany. I have a strong
                  passion for creativity and innovation, which is what led me to
                  pursue a career in Web Development. In this profile, I'll be
                  sharing more about my background and my skills.
                </p>
              </div>
              <div className="introducion-div-two">
                <p>
                  I embarked on my professional journey as a medical worker,
                  specifically as a Krankenpfleger (nurse), at the prestigious
                  University Hospital in Heidelberg, Germany, in November 2018.
                  Now, I can almost hear your thoughts: "What does a medical
                  background have to do with coding?" Well, hear me out! While
                  tending to patients in the intensive care unit, especially
                  during the challenging times of the COVID-19 pandemic, I
                  witnessed firsthand the incredible significance of teamwork
                  and collaboration. With a proven track record of successfully
                  working alongside diverse teams, I bring not only a strong
                  work ethic and dedication but also a genuine passion for
                  fostering positive and productive relationships. I am
                  confident that my ability to listen, communicate, and
                  collaborate will greatly contribute to the success of any team
                  I am a part of.
                </p>
                <p>
                  Motivated and driven, I immersed myself in learning the German
                  language and culture. Within just four months, I obtained my
                  B2 German certificate, showcasing my dedication to personal
                  growth. Building on this accomplishment, I successfully passed
                  the exam (Anerkennung) and received my German working license
                  (Urkunde) within a mere nine months of arriving in Germany.
                  While working in the medical field for several years, I began
                  to sense a deep yearning for a new challenge, a different path
                  to explore. This led me to discover the world of coding and
                  web development, as I sought opportunities to expand my
                  horizons and embark on a fresh journey of learning and
                  professional development.
                </p>
              </div>
            </div>
          </div>
          <div
            className={activPanelTwo ? "panel active" : "panel"}
            onClick={() => {
              setActivePanelTwo(true);
              setActivePanelFour(false);
              setActivePanelThree(false);
              setActivePanelOne(false);
            }}
          >
            <h3>Professional Background and motivations</h3>
            <hr className="hr-section-title-aboutme" />
            <div className="p-scroll">
              <div className="introducion-div-two">
                <p>
                  Embarking on a thrilling journey of self-discovery, I made the
                  bold decision to dive headfirst into the world of Web
                  Development. Driven by an insatiable thirst for challenge and
                  growth, I embarked on a self-learning adventure, determined to
                  unravel the secrets of coding. With each line of code I
                  mastered on my own, my confidence grew, and I realized that
                  this was a path I wanted to pursue further. Eager to refine my
                  skills and unlock new possibilities, I took a leap of faith
                  and enrolled in the prestigious WBS Coding School bootcamp.
                  Little did I know, this would be the catalyst that would
                  propel my passion for programming to new heights. Throughout
                  the bootcamp, I delved into a vibrant tapestry of front-end
                  and back-end tools, including the likes of HTML, CSS,
                  JavaScript, React, Node.js, and MongoDB. Armed with these
                  invaluable tools, I honed my craft and nurtured a deep
                  understanding of the intricate workings behind captivating web
                  experiences.
                </p>
                <p>
                  But here's the catch: my journey towards becoming a skilled
                  developer was not without its obstacles. As I pursued my
                  coding dreams, I also dedicated myself to my professional
                  work, which demanded a significant amount of time and energy.
                  Juggling night shifts and a rigorous coding curriculum, I
                  found myself pushing the boundaries of sleep, going without
                  rest for 24 to 25 hours at a stretch. This grueling schedule
                  showcased my unwavering determination and unyielding
                  commitment to my goals. Now, picture the possibilities when I
                  finally get the chance to channel a full eight hours of
                  undivided attention into programming. With such focused
                  dedication, I am poised to skyrocket, harnessing every
                  opportunity to craft elegant and impactful code. I am highly
                  motivated to continuously learn and adapt in the ever-changing
                  world of coding. The dynamic nature of the field serves as my
                  main source of inspiration and keeps me driven. I am seeking a
                  job that challenges me on a daily basis, where problem-solving
                  is a regular occurrence. I thrive in environments that push me
                  to think creatively and find solutions to new challenges each
                  day. I am excited about the opportunity to learn new things
                  every day and expand my knowledge. In summary, I am motivated
                  by the chance to continuously learn, solve problems, and
                  embrace new technologies in the field of coding.
                </p>
              </div>

              <div className="intro-div">
                <img className="aboutme-img-two" src={AboutMePortret}></img>
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
