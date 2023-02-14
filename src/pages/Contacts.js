const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Контакты</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p><a href="tel:+79374012849">+7 (937) 401-28-49</a></p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><a href="mailto:akultin@gmail.com">akultin@gmail.com</a></p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;