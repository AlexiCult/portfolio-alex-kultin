import "./style.css"
import gitHubIcon from "./external-link.png"

const BtnGitHub = ({link}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img className="ext-link-icon" src={gitHubIcon} alt="" />
      Ссылка на сайт
    </a>
  );
}

export default BtnGitHub;