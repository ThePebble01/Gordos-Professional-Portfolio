import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <Link to={"/"}>About Me</Link>
      <Link to={"/blog"}>Projects</Link>
      <Link to={"/contact"}>Contact</Link>
    </header>
  );
}

export default Header;
