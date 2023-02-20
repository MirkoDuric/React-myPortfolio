import "./App.css";
import Header from "./Components/header/Header";
import AboutMe from "./Components/about-me/AboutMe";
import MyExpertise from "./Components/my-expertise/MyExpertise";
import ContactForm from "./Components/contact-form/ContactForm";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/services&work" element={<MyExpertise />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
