import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import MenuButton from "../MenuButton";
import MenuSidebar from "../MenuSidebar";
import { useState, useEffect } from "react";
import "./MyExpertise.css";
export default function MyExpertise() {
  const [active, setActive] = useState(false);
  const [slideId, setSlideId] = useState(0);
  const [nextSlideId, setNextSlideId] = useState(1);
  const [previousSlideId, setPreviousSlideId] = useState(5);
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
  const prevSlide = skills[previousSlideId];
  const displayedSlide = skills[slideId];
  const nextSlide = skills[nextSlideId];
  function slideShow() {
    if (slideId === 0) {
      setPreviousSlideId(0);
      setSlideId(1);
      setNextSlideId(2);
    } else if (slideId === 1) {
      setPreviousSlideId(1);
      setSlideId(2);
      setNextSlideId(3);
    } else if (slideId === 2) {
      setPreviousSlideId(2);
      setSlideId(3);
      setNextSlideId(4);
    } else if (slideId === 3) {
      setPreviousSlideId(3);
      setSlideId(4);
      setNextSlideId(5);
    } else if (slideId === 4) {
      setPreviousSlideId(4);
      setSlideId(5);
      setNextSlideId(0);
    } else if (slideId === 5) {
      setPreviousSlideId(5);
      setSlideId(0);
      setNextSlideId(1);
    }
  }

  return (
    <div className="experties-container">
      <section>
        <div className="myexperties">
          <div class="title">
            <h2>My Skills</h2>
          </div>
          <div className="skill-cards">
            <article id={prevSlide.id} className="experties previous-skill ">
              {prevSlide.icon}
              <p>{prevSlide.description}</p>
            </article>

            <article id={displayedSlide.id} className="experties current-skill">
              {displayedSlide.icon}
              <p>{displayedSlide.description}</p>
            </article>

            <article id={nextSlide.id} className="experties next-skill">
              {nextSlide.icon}
              <p>{nextSlide.description}</p>
            </article>
          </div>
        </div>
        <div className="skills-btn">
          <button onClick={() => slideShow()}>Prev</button>
          <button onClick={() => slideShow()}>Next</button>
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
