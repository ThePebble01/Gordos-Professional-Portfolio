import "./portfolioItem.css";
function PortfolioItem({
  name,
  deployLink,
  repoLink,
  imgSrc,
  imgAlt,
  description,
  technologies,
}) {
  return (
    <div className="portfolio-item-container">
      <h3>{name}</h3>
      <img src={imgSrc} alt={imgAlt} />
      <div className="link-container">
        <a href={deployLink}>Application</a>
        <a href={repoLink}>Repository</a>
      </div>
      <div className="item-description">
        <b>Description</b>
        <p>
          {description}
          <br />
        </p>
      </div>
      <h5>Technology Used</h5>
      <ul>
        {technologies.map((tech) => {
          return <li>{tech}</li>;
        })}
      </ul>
    </div>
  );
}

export default PortfolioItem;
