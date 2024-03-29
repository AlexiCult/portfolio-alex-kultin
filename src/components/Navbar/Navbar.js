import {NavLink} from "react-router-dom"
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode"

import "./style.css"


const Navbar = () => {

  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/portfolio-alex-kultin/" className="logo"><strong>Разработка сайтов</strong> Алексей Культин</NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item"><NavLink to="/portfolio-alex-kultin/" className={({isActive}) => isActive ? activeLink : normalLink}>Проекты</NavLink></li>
            {/* <li className="nav-list__item"><NavLink to="/portfolio-alex-kultin/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Проекты</NavLink></li> */}
            <li className="nav-list__item"><NavLink to="/portfolio-alex-kultin/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Контакты</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;