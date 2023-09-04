import "./footer.css";
import GithubIcon from "./images/github.png";
import EnvelopeIcon from "./images/envelope.png";
import SalesforceIcon from "./images/SalesforceIcon.svg";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/ThePebble01">
        <img src={GithubIcon} style={{ width: "30px", height: "20px" }} />
      </a>
      <a href="mailto:john.gordos@outlook.com">
        <img src={EnvelopeIcon} style={{ width: "50px", height: "20px" }} />
      </a>
      <a href="https://www.salesforce.com/trailblazer/jgordos">
        <img src={SalesforceIcon} style={{ width: "50px", height: "20px" }} />
      </a>
    </footer>
  );
}

export default Footer;
