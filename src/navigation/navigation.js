import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    const link = e.currentTarget.id;
    navigate(`/${link}`);
  }
  return (
    <div className="tab">
      <button id="aboutMe" className="tablinks" onClick={handleClick}>
        About Me
      </button>
      <button id="projects" className="tablinks" onClick={handleClick}>
        Projects
      </button>
      <button id="contact" className="tablinks" onClick={handleClick}>
        Contact
      </button>
    </div>
  );
}
