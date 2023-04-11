// import { NavLink } from "react-router-dom";

import "./style.css"


const Project = ({title, skills, img, siteLink, gitHubLink}) => {
  return (
    <li className="project">
      <img src={img} alt={title} className="project__img" />
      <h3 className="project__title">{title}</h3>
      <h4 className="project__skills">{skills}</h4>
      {siteLink && (<a href={siteLink} target="_blank" rel="noreferrer">Ссылка на сайт</a>)}
      {gitHubLink && (<a href={gitHubLink} target="_blank" rel="noreferrer">Ссылка на GitHub</a>)}
    </li>
  );
}

export default Project;