import devPicture from "./john-gordos.png";
import "./aboutMe.css";

export default function App() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>
        John is a self-starter with a strong work ethic who values making things
        easy and more efficient for users by applying technical expertise to
        help maintain and implement scalable solutions. Excellent
        problem-solving skills. Strong understanding of the software development
        lifecycle on the Salesforce platform. Adept knowledge of Salesforce’s
        security model allowing for proper user management. Solid ability to
        utilize Apex, SOQL, Flows, Process Builders. Solid understanding of
        Sales and Service Cloud features. Expert at modeling data and
        customizing objects and fields. Recently graduated from a full-stack
        coding boot camp through the University of Denver to broaden his skills
        and facilitate his transition back to work. Check out some of his work
        under the Project section!
      </p>
      <img src={devPicture} alt="Picture of the developer." />
    </section>
  );
}
