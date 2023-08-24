import Carousel from "react-bootstrap/Carousel";
import PortfolioItem from "./portfolioItem/portfolioItem.js";
import { projectData } from "./projectData.js";
function ProjectContainer() {
  return (
    <Carousel controls={true} interval={10000}>
      {projectData.map((item) => {
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
export default ProjectContainer;
