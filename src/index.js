import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import AboutMe from "./aboutMe/aboutMe.js";
import Footer from "./footer/footer.js";
import Header from "./header/header.js";
import ContactFormContainer from "./contact/contactFormContainer.js";
import ProjectContainer from "./portfolio/projectContainer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/*" element={<AboutMe />} />
      <Route path="/contact" element={<ContactFormContainer />} />
      <Route path="/projects" element={<ProjectContainer />} />
    </Routes>
    <Footer />
  </Router>
);
