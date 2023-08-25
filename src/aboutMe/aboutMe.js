import devPicture from "./john-gordos.png";
import "./aboutMe.css";

export default function App() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>
        John was raised in the City of Commerce City, Colorado and has found his
        passion working with code to retrive, transform, and display data for
        users. Strong understanding of the software development lifecycle on the
        Salesforce platform including experience utilizing SFDX. Adept knowledge
        of Salesforce’s Security Model allowing for proper user management.
        Recently graduated from a full-stack coding bootcamp through the
        University of Denver to broaden his skills and facilitate his transition
        back to work. Check out some of his work under the Project section!
      </p>
      <img src={devPicture} alt="The quote unquote developer." />
    </section>
  );
}
