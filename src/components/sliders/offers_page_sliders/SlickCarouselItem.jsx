import React from "react";

import "./SlickCarouselItem.css";

import offer_1 from "../../../img/offers/1.png";
import offer_2 from "../../../img/offers/2.png";
import offer_3 from "../../../img/offers/3.png";
import offer_4 from "../../../img/offers/4.png";
import offer_5 from "../../../img/offers/5.png";
import offer_6 from "../../../img/offers/6.jpg";
import offer_7 from "../../../img/offers/7.png";
import offer_8 from "../../../img/offers/8.png";
import offer_9 from "../../../img/offers/9.png";
import offer_10 from "../../../img/offers/10.png";
import offer_11 from "../../../img/offers/11.png";
import offer_12 from "../../../img/offers/12.png";

const SlickCarouselItem = ({ category, title, price, img, id, selectOffer }) => {
  let currentImage;
  if (img === "offer_1") {
    currentImage = offer_1;
  } else if (img === "offer_2") {
    currentImage = offer_2;
  } else if (img === "offer_3") {
    currentImage = offer_3;
  } else if (img === "offer_4") {
    currentImage = offer_4;
  } else if (img === "offer_5") {
    currentImage = offer_5;
  } else if (img === "offer_6") {
    currentImage = offer_6;
  } else if (img === "offer_7") {
    currentImage = offer_7;
  } else if (img === "offer_8") {
    currentImage = offer_8;
  } else if (img === "offer_9") {
    currentImage = offer_9;
  } else if (img === "offer_10") {
    currentImage = offer_10;
  } else if (img === "offer_11") {
    currentImage = offer_11;
  } else if (img === "offer_12") {
    currentImage = offer_12;
  }

  return (
    <div className="card__wrapper" onClick={() => selectOffer(id-1)}>
      <div className="card">
        <div className="product__card">
          <div className="product__top">
            <div>
              <img className="product__photo" src={ currentImage } />
            </div>
          </div>
          <div className="card__content">
            <span className="card__category">{category}</span>
            <h5 className="card__title">
              <a href="shop-details.html">{title}</a>
            </h5>
            <p className="card__status">In stock</p>
            <div className="card__bottom">
              <ul className="card__buy">
                <li className="price">{price}</li>
                <li className="add">
                  <a href="">ADD +</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlickCarouselItem;
