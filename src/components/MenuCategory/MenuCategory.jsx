import livan from '../../assets/images/PNG/livan.png'
import pish_ghaza from '../../assets/images/PNG/pish_ghaza.png'
import deser from '../../assets/images/PNG/deser.png'
import ghaza from '../../assets/images/PNG/ghaza.png'
import React from "react";  
  
const MenuCategory = () => {

  return (
    <>
    <section id="menu__top" className="menu__wrapper">
      <div className="menu__title">
        <h3>منوی رستوران</h3>
      </div>

      <div className="Products__category">
        <div className="cart" onClick={() => navigate("/drinks")}>
          <div className="cart--link">
            <div className="cart--image">
              <img src={livan} alt="نوشیدنی" />
            </div>
            <div className="cart--title">
              <h4>نوشیدنی</h4>
            </div>
          </div>
        </div>

        <div className="cart" onClick={() => navigate("/dessert")}>
          <div className="cart--link">
            <div className="cart--image food">
              <img src={deser} alt="دسر" />
            </div>
            <div className="cart--title">
              <h4>دسر</h4>
            </div>
          </div>
        </div>

        <div className="cart" onClick={() => navigate("/starter")}>
          <div className="cart--link">
            <div className="cart--image food">
              <img src={pish_ghaza} alt="پیش غذا" />
            </div>
            <div className="cart--title">
              <h4>پیش‌غذا</h4>
            </div>
          </div>
        </div>

        <div className="cart" onClick={() => navigate("/main")}>
          <div className="cart--link">
            <div className="cart--image food">
              <img src={ghaza} alt="غذای اصلی" />
            </div>
            <div className="cart--title">
              <h4>غذای اصلی</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MenuCategory;