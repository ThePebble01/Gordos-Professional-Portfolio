import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Link to={"/"}>About Me</Link>
      <Link to={"/blog"}>Projects</Link>
      <Link to={"/contact"}>Contact</Link>
      {/*RESUME*/}
    </>
  );
}

export default Navigation;
