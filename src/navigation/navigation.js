import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./navigation.scss";
export default function Navigation() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    const link = e.currentTarget.dataset.link;
    navigate(`/${link}`);
  }
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button data-link="aboutMe" className="nav-link" onClick={handleClick}>
          About Me
        </button>
      </li>
      <li className="nav-item">
        <button data-link="projects" className="nav-link" onClick={handleClick}>
          Projects
        </button>
      </li>
      <li className="nav-item">
        <button data-link="contact" className="nav-link" onClick={handleClick}>
          Contact
        </button>
      </li>
    </ul>
  );
}
