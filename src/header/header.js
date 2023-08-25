import Navigation from "../navigation/navigation.js";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>John Gordos</h1>
      <nav className="navigation">
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
