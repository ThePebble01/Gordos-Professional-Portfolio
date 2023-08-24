import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <Link to={"https://github.com/ThePebble01"}>Github:ThePebble01</Link>
      <Link to={"mailto:john.gordos@outlook.com"}>john.gordos@outlook.com</Link>
      <Link to={"https://www.salesforce.com/trailblazer/jgordos"}>
        Trailblazer Profile
      </Link>
    </footer>
  );
}

export default Footer;
