import Carousel from "react-bootstrap/Carousel";
import travelBuddyImage from "./images/travel-buddy.png";
//import project
//take name, img src, link,
// this will act as the carosel controller
function Portfolio() {
  const projectContent = [
    {
      name: "Travel Buddy",
      deployLink: "https://dsstad.github.io/travel-weather/",
      repoLink: "",
      imgSrc: "",
      imgAlt:
        "Travel Buddy interface showing a route from Colorado to New Mexico with weather along the way.",
    },
    {
      name: "",
      deployLink: "",
      imgSrc: "",
      imgAlt: "",
    },
    {
      name: "Fruit Finder",
      deployLink: "https://fruit-finder-f298ed9223ea.herokuapp.com/",
      repoLink: "https://github.com/ThePebble01/fruit-finder",
      imgSrc: "",
      imgAlt:
        "Fruit Finder landing page, showing the most recent fruit sightings",
    },
    {
      name: "Progressive Web Application Demo With Just A Text Editor",
      deployLink: "https://jg-pwa-text-editor-29395f144ed6.herokuapp.com/",
      repoLink: "https://github.com/ThePebble01/text-editor",
      imgSrc: "",
      imgAlt:
        "The text editor is displayed as a separate application, running outside of chrome, but using chromium",
    },
    {
      name: "Javascript Quiz",
      deployLink: "https://thepebble01.github.io/Javascript-Quiz/index.html",
      repoLink: "https://github.com/ThePebble01/Javascript-Quiz",
      imgSrc: "",
      imgAlt:
        "Landing page for the quiz, describing that there are 20 questions to complete within a minute.",
    },
    {
      name: "Password Generator",
      deployLink: "https://thepebble01.github.io/Password-Generator/",
      repoLink: "https://github.com/ThePebble01/Password-Generator",
      imgSrc: "",
      imgAlt: "Password generator landing page",
    },
  ];
  return (
    <Carousel controls={true} data-bs-theme="dark">
      <Carousel.Item>
        <h3>Travel Buddy</h3>
        <img src={travelBuddyImage} style={{ width: "50%", height: "50%" }} />
        <p>
          Description
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          fuga veniam. Atque tempora nam ab quae quis eum adipisci! Veniam?
          <br />
          <ul>
            <li>APIs</li>
            <li>Brains</li>
          </ul>
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Halp!</h3>
        <img src={travelBuddyImage} style={{ width: "50%", height: "50%" }} />
        <p>
          Description
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          fuga veniam. Atque tempora nam ab quae quis eum adipisci! Veniam?
          <br />
          <ul>
            <li>APIs</li>
            <li>Brains</li>
          </ul>
        </p>
      </Carousel.Item>
    </Carousel>
  );
}
export default Portfolio;
{
  /*
    <section class="container">
      <h2>Projects</h2>
      <div class="project-items">
        <div class="project-item">
          <h3>Travel Buddy</h3>
          <a href="https://dsstad.github.io/travel-weather/">
            <img
              id="primary-project-image"
              src="./assets/images/travel-buddy.png"
              alt="Travel Buddy interface showing a route from Colorado to New Mexico with weather along the way."
            />
          </a>
        </div>
        <div class="secondary-projects">
          <div class="project-item">
            <h3>TBD - Rock, Paper Scissors</h3>
            <a href="#">
              <img
                id="robo-gamer"
                src="./assets/images/sebastiaan-stam-robo-gamer.jpg"
                alt="A person in a hood with a robot mask, pulling the hood down."
              />
            </a>
          </div>
          <div class="project-item">
            <h3>TBD - Nested, Nested, Nested Flexbox Demo</h3>
            <a href="#">
              <img
                id="nested-boxes"
                src="./assets/images/fibonacci-flexbox-icon.png"
                alt="A large box with smaller boxes nested within it.  The 
                  orientation of the nested boxes makes it almost look like a spiral."
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  */
}
