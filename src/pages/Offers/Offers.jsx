import React, { useState } from "react";
import SimpleSlider from "../../components/sliders/offers_page_sliders/slick-carousel";
import Button from "../../components/inc-button";
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

const Offers = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [offerId, setOfferId] = useState(0);

  const setOfferIdHandler = (Id) => {
    setOfferId(Id);
    console.log(Id)
  };

  return (
    <div>
      <Header />
      
        <div className="container offers_container">
          <section className="product-content">
            <div className="content__left">
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
            </div>
            <div className="content__right">
              <div className="product">
                <div className="product__gallery">
                  <img className="product__img" src={ offer_1 }></img>
                </div>
                <div className="product__info">
                  <p className="product__category">{props.offers[0].category}</p>
                  <h3 className="product__title">{props.offers[0].title}</h3>
                  <p className="product__status">In stock</p>
                  <p className="product__price">{props.offers[0].price}</p>
                  <p className="product__description">
                  {props.offers[0].description}
                  </p>
                  <div className="product__order">
                    <div className="product__quantity">
                      <p className="quantity__text">Quantity:</p>
                      <Button></Button>
                    </div>
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
                    ></Modal>
                  </div>
                </div>
              </div>

              <div className="info-tabs">
                <ul className="tabs">
                  <li className="tabs__item">
                    <a className="tabs__link characteristics tabs__active">
                      Characteristics
                    </a>
                  </li>
                  <li className="tabs__item">
                    <a className="tabs__link information">Order information</a>
                  </li>
                </ul>
                <div className="tabs__content">
                  <p className="tabs__text">
                    {props.offers[0].advantages["1"]}<br/>
                    {props.offers[0].advantages["2"]}<br/>
                    {props.offers[0].advantages["3"]}<br/>
                  </p>
                </div>
              </div>
              <h2 className="slider__titile">Related Products</h2>
              <div className="slider__wrapper">
                <SimpleSlider offerSelect={ (Id)=>setOfferIdHandler(Id) } offers={props.offers}></SimpleSlider>
              </div>
            </div>
          </section>
        </div>
      
      <Footer />
    </div>
  );
};

export default Offers;
