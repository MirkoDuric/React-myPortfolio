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
      description: `As a junior developer, I have a solid foundation in HTML. I have a
  good understanding of HTML syntax, semantics, and best practices for
  creating web pages. I can write well-structured HTML code that is
  accessible and semantically meaningful. I am also familiar with
  using HTML5 tags and features, as well as integrating HTML with
  other front-end and back-end technologies.`,
    },
    {
      id: 1,
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
      id: 2,
      icon: <FaJs className="icon js" />,
      description: `I have a proficient knowledge of JavaScript and its capabilities in
      creating dynamic and interactive web pages. I am familiar with
      JavaScript syntax, data types, and control structures, as well as
      object-oriented programming concepts. I can use JavaScript to
      manipulate the Document Object Model (DOM) to create dynamic effects
      and behaviors on web pages. I am continuously improving my knowledge
      of JavaScript and staying up-to-date with the latest trends and best
      practices in the language.`,
    },
    {
      id: 3,
      icon: <FaReact className="icon react" />,
      description: `I have a solid understanding of React and its capabilities in
      building dynamic and interactive user interfaces. I am familiar with
      React components, JSX syntax, and state management using props and
      hooks. I can use React to create reusable and scalable components
      that can be combined to create complex user interfaces.
      Additionally, I am familiar with React Router for creating
      multi-page applications, and I have experience working with APIs and
      making asynchronous requests using Axios.`,
    },
    {
      id: 4,
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
      id: 5,
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
      <section className="myexperties">
        <div className="skills-container">
          <div className="skill-title">
            <h2>My Skills</h2>
            <hr />
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
            <div className="mySlider">
              <article className="slide">
                {skills[currentSlideId].icon}
                <p>{skills[currentSlideId].description}</p>
              </article>
              <button onClick={() => handlePrevClick()}>&#8678;</button>
              <button onClick={() => handleNextClick()}>&#8680;</button>
            </div>
          )}
        </div>
      </section>
      <MenuButton
        activeTggle={(e) => {
          return setActive(!active), e.target.classList.toggle("active");
        }}
      />
      {active ? <MenuSidebar /> : null}
    </div>
  );
}
