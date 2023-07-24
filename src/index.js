import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import AboutMe from "./about-me/about-me.js";
import Footer from "./footer/footer.js";
import Header from "./header/header.js";
import Contact from "./contact/contact.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {/*
    <Routes>
      <Route path="/projects" element={<Projects />} />
    </Routes>
    */}
    <Footer />
  </Router>
);
