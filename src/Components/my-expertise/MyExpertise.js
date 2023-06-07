import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./MyExpertise.css";
import { EffectCoverflow, Pagination } from "swiper";
import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import "./MyExpertise.css";
import useWindowsResize from "../../useWindowResize";

export default function MyExpertise() {
  const [active, setActive] = useState(false);
  const { width, height } = useWindowsResize();
  const [currentSlideId, setCurrentSlideId] = useState(0);

  const skills = [
    {
      id: 0,
      icon: <FaHtml5 className="icon html" />,
      description: `As a junior developer, I have a strong foundation in HTML. I specialize in creating well-structured and visually appealing web pages. My expertise extends to integrating HTML with various front-end and back-end technologies, including HTML5 features.
      Driven by a passion for continuous learning, I eagerly embrace new challenges in the ever-evolving field of web development. HTML serves as my artistic canvas, allowing me to unleash creativity and deliver immersive user experiences`,
    },
    {
      id: 0,
      icon: <FaCss3 className="icon css" />,
      description: `I have a solid understanding of CSS and its capabilities in styling
      and layout of web pages. I am familiar with CSS syntax, properties,
      and best practices for creating efficient and maintainable
      stylesheets. I can create responsive and accessible layouts using
      CSS grid and flexbox, and I am proficient in creating custom styles
      and animations. I am also familiar with preprocessors such as Sass
      and Less and am comfortable working with CSS frameworks such as
      Bootstrap and MUI.`,
    },
    {
      id: 1,
      icon: <FaJs className="icon js" />,
      description: `With a proficient knowledge of JavaScript, I bring web pages to life, infusing them with dynamic and interactive elements. I am well-versed in JavaScript syntax, data types, control structures, and object-oriented programming concepts. Leveraging the power of the Document Object Model (DOM), I create captivating effects and behaviors. Continuously improving my skills, I trying to stay updated with the latest trends and best practices in JavaScript.`,
    },
    {
      id: 2,
      icon: <FaReact className="icon react" />,
      description: `I have a strong understanding of React, the driving force behind dynamic and interactive user interfaces. With expertise in React components, JSX syntax, and effective state management using props and hooks, I excel at creating scalable and reusable components that seamlessly combine to build intricate user interfaces. I also bring experience in utilizing React Router for multi-page applications and working with APIs, making asynchronous requests using Axios.
      In addition to my React skills, I've embarked on an exciting journey of learning TypeScript. `,
    },
    {
      id: 3,
      icon: <FaDatabase className="icon db" />,
      description: `I have a foundational understanding of both SQL and NoSQL and their
      roles in managing data in web development. I am familiar with
      relational database concepts and SQL syntax. I can write SQL queries
      to retrieve and manipulate data, and I am comfortable working with
      popular relational database management systems such as MySQL and
      PostgreSQL. I also have a basic understanding of MongoDB and its
      capabilities in creating and managing non-relational databases. I am
      familiar with MongoDB syntax and basic CRUD operations. While my
      experience with MongoDB is currently limited, I am eager to continue
      expanding my knowledge.`,
    },
    {
      id: 4,
      icon: <FaNodeJs className="icon node" />,
      description: `I have a basic understanding of Node.js and its capabilities in
      building scalable and efficient web applications. I am familiar with
      Node.js core modules, such as the HTTP and File System modules, and
      I can use Node.js to create web servers, handle file input and
      output, and perform other server-side tasks. Additionally, I am
      proficient in working with npm and can use it to manage packages and
      dependencies for Node.js projects. I am also familiar with popular
      Node.js frameworks, such as Express.js.`,
    },
  ];
  function handleNextClick() {
    setCurrentSlideId(Math.min(currentSlideId + 1, 5));
  }
  function handlePrevClick() {
    setCurrentSlideId(Math.max(currentSlideId - 1, 0));
  }
  return (
    <div className="experties-container">
      <div className="skills-container">
        <div className="skill-title">
          <h2>
            <span className="element-h2-span">{"<h2>"}</span>My Skills
            <span className="element-h2-span">{"</h2>"}</span>
          </h2>
          <p className="first-intro-paragraph">
            <span className="element-p-span">{"<p>"}</span>
            These are some of the skills that I posses. I continued to work on
            it day by day after my bootcamp.
            <span className="element-p-span"> {"</p>"}</span>
          </p>
          <p className="second-intro-paragraph">
            <span className="element-p-span">{"<p>"}</span>I can't wait to get
            my first job or internship so that I can fully focus on coding,
            learning new technologies and improving the existing ones.
            <span className="element-p-span"> {"</p>"}</span>
          </p>
        </div>
        {width > 1024 ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {skills.map((skill) => {
              return (
                <SwiperSlide>
                  <article>
                    {skill.icon}
                    <p>{skill.description}</p>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="skill-carousel">
            <div
              className="carousel-card-container"
              style={{ transform: `translateX(${currentSlideId * -60}vw)` }}
            >
              {skills.map((skill) => {
                return (
                  <div className="skill-card">
                    {skill.icon}
                    <p>{skill.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="buttons-container">
              <button onClick={handlePrevClick} className="btn" id="left">
                Prev
              </button>
              <button onClick={handleNextClick} className="btn" id="right">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </div>
  );
}
