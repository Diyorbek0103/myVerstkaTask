import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <h3>Почему выбирают нас:</h3>
        <div className="col-xl-3">
          <div className="box">
            <img src="images/icon1.png" alt="icon1" />
            <div className="all-title">
              <div className="main-title">
                <b>Эксклюзивный дизайн</b>
              </div>{" "}
              Не имеющий аналогов в Украине
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="box">
            <img src="images/icon2.png" alt="icon1" />
            <div className="all-title">
              <div className="main-title">
                <b>Разработка модели</b>
              </div>{" "}
              Индивидуальной с помощью 3D-визуализации в нашем приложении
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="box">
            <img src="images/icon3.png" alt="icon1" />
            <div className="all-title">
              <div className="main-title">
                <b>Сертификаты качества</b>
              </div>
              Подтверждают наши материалы и комплектующие
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="box">
            <img src="images/icon4.png" alt="icon1" />
            <div className="all-title">
              <div className="main-title">
                <b>Работа под ключ</b>
              </div>
              В среднем за Х дней от установки фундамента до сдачи объекта в
              эксплуатацию
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
