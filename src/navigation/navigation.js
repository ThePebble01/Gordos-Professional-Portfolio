import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Link to={"/"}>About Me</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/contact"}>Contact</Link>
    </>
  );
}
