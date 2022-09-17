import React from "react";
import "./Body.scss";
const Body = () => {
  return (
    <div className="body">
      <div className="row">
        <div className="col-xl-6 col-12">
          <div className="title">
            Производим и устанавливаем строения разных видов в Украине
          </div>
          <div className="paragraph paragraph-mobile">
            Индивидуально под ваш запрос построим дом, ресторан, баню, беседку,
            мангал или любую другую постройку
          </div>
          <div className="footer_section footer_section-mobile">
            <button>Перейти в каталог домов</button>
            <div className="d-flex align-items-center">
              <i
                className="bi  bi-arrow-right-circle"
                style={{ fontSize: "30px" }}
              ></i>
              Каталог бань
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-12 position-relative">
          <img className="flower" src="images/flower.png" alt="rasm" />
          <img className="layer" src="images/layer.png" alt="rasm" />
          <img className="img-fluid" src="images/home.png" alt="img" />
        </div>
        <div className="col-12 mobile-content">
          <div className="paragraph">
            Индивидуально под ваш запрос построим дом, ресторан, баню, беседку,
            мангал или любую другую постройку
          </div>
          <div className="footer_section">
            <button>Перейти в каталог домов</button>
            <div className="d-flex align-items-center">
              <i
                className="bi  bi-arrow-right-circle"
                style={{ fontSize: "30px" }}
              ></i>
              Каталог бань
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
