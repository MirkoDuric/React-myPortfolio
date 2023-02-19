import "./App.css";
import Header from "./Components/header/Header";
import { Routes, Route, NavLink, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
