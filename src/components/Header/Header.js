import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Привет, меня зовут <em>Алексей</em></strong><br />
          я разрабатываю сайты
        </h1>
        <div className="header__title2">
          <div className="header__items">
            <div>
              Мои проекты и контакты
            </div>
            <div>
              ⇗
            </div>
          </div>
          <div className="header__items">
            <div>
              Моё резюме и технологии
            </div>
            <div>
              ⇓
            </div>
          </div>
        </div>
        
        <a href="#!" className="btn">Скачать резюме</a>
      </div>
  </header>
  );
}

export default Header;