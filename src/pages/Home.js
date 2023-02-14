import Header from "./../components/Header/Header";

import HTMLlogo from "./../img/logos/HTML5.png"
import CSSlogo from "./../img/logos/CSS3.png"
import SCSSlogo from "./../img/logos/Sass_Logo_Color.png"
import JSlogo from "./../img/logos/JS.png"
import Reactlogo from "./../img/logos/React.png"
import WPlogo from "./../img/logos/wordpress-logo-29017.png"

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Технологии, которые я использую</h2>
              <ul className = "technologies-list">
                <li className = "technologies-list__item">HTML <img src={HTMLlogo} alt="HTML logo" /></li>
                <li className = "technologies-list__item">CSS <img src={CSSlogo} alt="CSS logo" /></li>
                <li className = "technologies-list__item">JavaScript <img src={JSlogo} alt="JS logo" /></li>
                <li className = "technologies-list__item">SCSS <img src={SCSSlogo} alt="SCSS logo" /></li>
                <li className = "technologies-list__item">React <img src={Reactlogo} alt="React logo" /></li>
                <li className = "technologies-list__item">Wordpress <img src={WPlogo} alt="WP logo" /></li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;