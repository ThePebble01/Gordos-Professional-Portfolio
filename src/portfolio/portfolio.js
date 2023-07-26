import Carousel from "react-bootstrap/Carousel";
import travelBuddyImage from "./images/travel-buddy.png";
import PortfolioItem from "./portfolioItem/portfolioItem.js";
import { portfolioData } from "./protfolioData.js";
//import project
//take name, img src, link,
// this will act as the carosel controller
function Portfolio() {
  return (
    <Carousel controls={true} interval={10000} data-bs-theme="dark">
      {portfolioData.map((item) => {
        return (
          <Carousel.Item>
            <PortfolioItem
              name={item.name}
              deployLink={item.deployLink}
              repoLink={item.repoLink}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              description={item.description}
              technologies={item.technologies}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default Portfolio;
