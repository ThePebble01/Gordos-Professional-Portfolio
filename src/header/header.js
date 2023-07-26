import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation.js";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>John Gordos</h1>
      <Navigation />
    </header>
  );
}

export default Header;
