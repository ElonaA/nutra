import React, { useState } from "react";
import SimpleSlider from "../../components/sliders/offers_page_sliders/slick-carousel";
// import Button from "../../components/inc-button";
import Modal from "../Modal";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Offers.css";

import offer_1 from "../../img/offers/1.png";
import offer_2 from "../../img/offers/2.png";
import offer_3 from "../../img/offers/3.png";
import offer_4 from "../../img/offers/4.png";
import offer_5 from "../../img/offers/5.png";
import offer_6 from "../../img/offers/6.jpg";
import offer_7 from "../../img/offers/7.png";
import offer_8 from "../../img/offers/8.png";
import offer_9 from "../../img/offers/9.png";
import offer_10 from "../../img/offers/10.png";
import offer_11 from "../../img/offers/11.png";
import offer_12 from "../../img/offers/12.png";

const Offers = ({ offers, offerID, subId, pixel, selectOffer }) => {
  const [modalActive, setModalActive] = useState(false);
  
  let offerImg;
  if (offerID === 0) {
    offerImg = offer_1
  } else if (offerID === 1) {
    offerImg = offer_2
  } else if (offerID === 2) {
    offerImg = offer_3
  } else if (offerID === 3) {
     offerImg = offer_4
  } else if (offerID === 4) {
     offerImg = offer_5
  } else if (offerID === 5) {
     offerImg = offer_6
  } else if (offerID === 6) {
     offerImg = offer_7
  } else if (offerID === 7) {
     offerImg = offer_8
  } else if (offerID === 8) {
     offerImg = offer_9
  } else if (offerID === 9) {
     offerImg = offer_10
  } else if (offerID === 10) {
     offerImg = offer_11
  } else if (offerID === 11) {
     offerImg = offer_12
  }  

  return (
    <div>
      <Header />
      
        <div className="container offers_container">
          <section className="product-content">

            {/* тимчасово прибрали - не видаляти! */}
            {/* <div className="content__left">
              <div className="search">
                <form className="search__form">
                  <input
                    className="search__input"
                    type="text"
                    placeholder="Search..."
                  ></input>
                  <button type="submit" className="search__btn">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                </form>
              </div>
              <h2 className="section__title">Category</h2>
              <ul className="category__list">
                <li className="category__item">
                  <a className="category__link" href="#">
                    1 category
                  </a>
                  <span className="material-symbols-outlined add-icon">
                    add
                  </span>
                </li>
                <li className="category__item">
                  <a className="category__link" href="#">
                    2 category
                  </a>
                  <span className="material-symbols-outlined add-icon">
                    add
                  </span>
                </li>
                <li className="category__item">
                  <a className="category__link" href="#">
                    3 category
                  </a>
                  <span className="material-symbols-outlined add-icon">
                    add
                  </span>
                </li>
                <li className="category__item">
                  <a className="category__link" href="#">
                    4 category
                  </a>
                  <span className="material-symbols-outlined add-icon">
                    add
                  </span>
                </li>
                <li className="category__item">
                  <a className="category__link" href="#">
                    5 category
                  </a>
                  <span className="material-symbols-outlined add-icon">
                    add
                  </span>
                </li>
                <li className="category__item">
                  <a className="category__link" href="#">
                    6 category
                  </a>
                  <span className="material-symbols-outlined add-icon">
                    add
                  </span>
                </li>
              </ul>

              <h2 className="section__title">Contacts</h2>
              <ul className="contact__list">
                <li className="contact__item">Campany: </li>
                <li className="contact__item">E-mail: </li>
              </ul>
            </div> */}
            <div className="content__right">
              <div className="product">
                <div className="product__gallery">
                  <img className="product__img" src={ offerImg }></img>
                </div>
                <div className="product__info">
                  <p className="product__category">{offers[offerID].category}</p>
                  <h3 className="product__title">{offers[offerID].title}</h3>
                  <p className="product__status">In stock</p>
                  <p className="product__price">{offers[offerID].price}</p>
                  <p className="product__description">
                    <ul className="list">
                      <li><b>1.</b> {offers[offerID].advantages["1"]}</li>
                      <li><b>2.</b> {offers[offerID].advantages["2"]}</li>
                      <li><b>3.</b> {offers[offerID].advantages["3"]}</li>
                    </ul>
                  
                  </p>
                  <div className="product__order">

                    {/* тимчасово вимкнули - не видаляти! */}
                    {/* <div className="product__quantity">
                      <p className="quantity__text">Quantity:</p>
                      <Button></Button>
                    </div> */}
                    <button
                      onClick={() => setModalActive(true)}
                      className="product__btn"
                    >
                      Buy
                      <span className="material-symbols-outlined btn-icon">
                        add
                      </span>
                    </button>
                    <Modal
                      active={modalActive}
                      setActiv={setModalActive}
                      offerTitle={ offers[offerID].title }
                      offerFlow={ offers[offerID].flow }
                      subId={subId}
                      pixel={pixel}
                    ></Modal>
                  </div>
                </div>
              </div>

              <div className="info-tabs">
                <ul className="tabs">
                  
                  <li className="tabs__item">
                    <a className="tabs__link characteristics tabs__active">
                    Information
                    </a>
                  </li>

                  {/* тимчасово - вимкнутий */}
                  {/* <li className="tabs__item">
                    <a className="tabs__link information">Order information</a>
                  </li> */}
                </ul>
                <div className="tabs__content">
                  <p className="tabs__text">
                    {offers[offerID].description}
                  </p>
                </div>
              </div>
              <h2 className="slider__titile">Related Products</h2>
              <div className="slider__wrapper">
                <SimpleSlider offers={ offers } selectOffer={ selectOffer }></SimpleSlider>
              </div>
            </div>
          </section>
        </div>
      
      <Footer />
    </div>
  );
};

export default Offers;
