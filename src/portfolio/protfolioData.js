import travelBuddyImage from "./images/travel-buddy.png";
import fruitFinderImage from "./images/fruit-finder.png";
import pwaTextEditorImage from "./images/pwa-text-editor.png";
import jsQuizImage from "./images/javascript-quiz.png";
import passwordGeneratorImage from "./images/password-generator.png";
export const portfolioData = [
  {
    name: "Travel Buddy",
    deployLink: "https://thepebble01.github.io/travel-weather/",
    repoLink: "https://github.com/ThePebble01/travel-weather",
    imgSrc: travelBuddyImage,
    imgAlt:
      "Travel Buddy interface showing a route from Colorado to New Mexico with weather along the way.",
    description:
      "This application leverages Mapbox and OpenWeather API so that users can plot a trip and see weather along the way, instead of having to use separate applications.",
    technologies: [
      "Javascript",
      "JQuery",
      "Bootstrap",
      "Mapbox API",
      "OpenWeather API",
    ],
  },
  {
    name: "Fruit Finder",
    deployLink: "https://fruit-finder-f298ed9223ea.herokuapp.com/",
    repoLink: "https://github.com/ThePebble01/fruit-finder",
    imgSrc: fruitFinderImage,
    imgAlt:
      "Fruit Finder landing page, showing the most recent fruit sightings",
    description:
      "This application utilizes a MySQL database to fruit, locations, and fruit sightings.  Fruit data was initially loaded from https://fruityvice.com/.  Heroku Scheduler was leveraged to display the 'Fruit of the Day' on the homepage.",
    technologies: [
      "Javascript",
      "MySQL Database",
      "MySQL2",
      "Sequelize",
      "Express",
      "MVC Paradigm",
      "Heroku Scheduler",
      "Handlebars",
      "Bcrypt",
    ],
  },
  {
    name: "Progressive Web Application Demo With Just Another Text Editor",
    deployLink: "https://jg-pwa-text-editor-29395f144ed6.herokuapp.com/",
    repoLink: "https://github.com/ThePebble01/text-editor",
    imgSrc: pwaTextEditorImage,
    imgAlt:
      "The text editor is displayed as a separate application, running outside of chrome, but using chromium",
    description:
      "A simple text editor that operates as a progressive web application (PWA).  Your notes persist by leveraging IndexDB.",
    technologies: ["Javascript", "Webpack", "Service Worker", "PWA", "IndexDB"],
  },
  {
    name: "Javascript Quiz",
    deployLink: "https://thepebble01.github.io/Javascript-Quiz/index.html",
    repoLink: "https://github.com/ThePebble01/Javascript-Quiz",
    imgSrc: jsQuizImage,
    imgAlt:
      "Landing page for the quiz, describing that there are 20 questions to complete within a minute.",
    description:
      "This application serves a javascript quiz for users.  Local Storage is used to track high scores.",
    technologies: ["Javascript", "JQuery", "LocalStorage"],
  },
  {
    name: "Password Generator",
    deployLink: "https://thepebble01.github.io/Password-Generator/",
    repoLink: "https://github.com/ThePebble01/Password-Generator",
    imgSrc: passwordGeneratorImage,
    imgAlt: "Password generator landing page",
    description:
      "Generates a password based on the parameters provided by the user.",
    technologies: ["Javascript", "React"],
  },
];
