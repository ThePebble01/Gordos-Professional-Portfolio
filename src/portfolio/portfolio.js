import Carousel from "react-bootstrap/Carousel";
import PortfolioItem from "./portfolioItem/portfolioItem.js";
import { portfolioData } from "./protfolioData.js";
function Portfolio() {
  return (
    <Carousel controls={true} interval={10000}>
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
