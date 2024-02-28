import React, { useEffect, useRef, useState } from "react";
import SimpleSlider from "../../components/sliders/offers_page_sliders/slick-carousel";
// import Button from "../../components/inc-button";
import Modal from "./Modal/Modal";
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
// import { Link } from "react-router-dom";

const Offers = ({ offers, offerID, selectOffer, pixel, subId, subId_2, subId_3, cancelOffersCategory }) => {
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
  
  //scroll to top
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  });


  return (
    <div ref={ref}>
      <Header cancelOffersCategory={cancelOffersCategory}/>
        <div className="container offers_container">
          <section className="product-content">

            <div className="content__right">
              <div className="product">
                <div className="product__gallery">
                  <img className="product__img" alt="product-card" src={ offerImg }></img>
                </div>
                <div className="product__info">
                  <p className="product__category">{offers[offerID].category}</p>
                  <h3 className="product__title">{offers[offerID].title}</h3>
                  <p className="product__status">Საწყობში</p>
                  <p className="product__price">{offers[offerID].price}</p>
                  <p className="product__description">
                    <ul className="list">
                      <li><b>1.</b> {offers[offerID].advantages["1"]}</li>
                      <li><b>2.</b> {offers[offerID].advantages["2"]}</li>
                      <li><b>3.</b> {offers[offerID].advantages["3"]}</li>
                    </ul>
                  
                  </p>
                  <div className="product__order">

                    
                    <button
                      onClick={() => setModalActive(true)}
                      className="product__btn"
                    >
                      იყიდე
                      <span className="material-symbols-outlined btn-icon">
                        add
                      </span>
                    </button>
                    <Modal
                      active={modalActive}
                      setActiv={setModalActive}
                      offerTitle={ offers[offerID].title }
                      offerFlow={ offers[offerID].flow }
                      pixel={pixel}
                      subId={subId}
                      subId_2={subId_2}
                      subId_3={subId_3}
                    ></Modal>
                  </div>
                </div>
              </div>

              <div className="info-tabs">
                <ul className="tabs">
                  
                  <li className="tabs__item">
                    <span className="tabs__link characteristics tabs__active">
                    ინფორმაცია
                    </span>
                  </li>

                </ul>
                <div className="tabs__content">
                  <p className="tabs__text">
                    {offers[offerID].description}
                  </p>
                </div>
              </div>
              <h2 className="slider__titile">მსგავსი პროდუქტები</h2>
              <div className="slider__wrapper">
                <SimpleSlider offers={ offers } selectOffer={ selectOffer }></SimpleSlider>
              </div>
            </div>
          </section>
        </div>
      
      <Footer cancelOffersCategory={cancelOffersCategory}/>
    </div>
  );
};

export default Offers;
