import devPicture from "./john-gordos.png";
import "./aboutMe.css";

function App() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>
        John was raised in the City of Commerce City, Colorado and has wandered
        and wondered how to serve his time through technology. Curious and
        persistent, he has the makings of a decent developer. Check out some of
        his work under Portfolio!
      </p>
      <img src={devPicture} alt="The quote unquote developer." />
    </section>
  );
}

export default App;