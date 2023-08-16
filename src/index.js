import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"; //review styling for about and projects...incorporate bootstrap
import "./index.css";
import AboutMe from "./aboutMe/aboutMe.js";
import Footer from "./footer/footer.js";
import Header from "./header/header.js";
import Contact from "./contact/contact.js";
import Portfolio from "./portfolio/portfolio.js";
import Resume from "./resume/resume.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/*" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer />
  </Router>
);
