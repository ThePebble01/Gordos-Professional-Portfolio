import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Link to={"/"}>About Me</Link>
      <Link to={"/portfolio"}>Portfolio</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/resume"}>Resume</Link>
    </>
  );
}

export default Navigation;
