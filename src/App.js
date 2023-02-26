import "./App.css";
import Header from "./Components/header/Header";
import AboutMe from "./Components/about-me/AboutMe";
import MyExpertise from "./Components/my-expertise/MyExpertise";
import ContactForm from "./Components/contact-form/ContactForm";
import MyProjects from "./Components/my-projects/MyProjects";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/React-myPortfolio" element={<Header />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skills" element={<MyExpertise />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/myprojects" element={<MyProjects />} />
      </Routes>
    </>
  );
}

export default App;
