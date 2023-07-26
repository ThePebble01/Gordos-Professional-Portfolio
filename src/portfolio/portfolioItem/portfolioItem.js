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
    <div class="project-item-container">
      <h3>{name}</h3>
      <img src={imgSrc} alt={imgAlt} />
      <center>
        <a href={deployLink}>
          <b>Application </b>
        </a>
        <br />
        <a href={repoLink}>
          <b>Repository</b>
        </a>
      </center>
      <p>
        <center>
          <b>Description</b>
        </center>
        {description}
        <br />
      </p>
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
