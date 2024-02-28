import "./Shop.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import ShopOfferItem from "./ShopOfferItem/ShopOfferItem";
import { useEffect, useRef } from "react";


const Shop = (props) => {

  //category filter
  const category = props.offersCategory;

  const categoryTitle = category ? ` (${category})`: '';

  //on the select offer
  const selectOfferHandler = (selectedID) => {
    props.selectOffer(selectedID);
  };

  // offers list
  let offersList;
  if (category === "") { //all offers
    offersList = props.offers.map((item) => (
      <ShopOfferItem
        selectOffer={selectOfferHandler}
        category={item.category}
        title={item.title}
        rating={item.rating}
        old_price={item.old_price}
        discount={item.discount}
        price={item.price}
        img={item.img}
        id={item.id}
        key={item.id}
      />
    ));
  } else { //offers in current category
    offersList = props.offers
    .filter(item => item.category === category)
    .map((item) => (
      <ShopOfferItem
        selectOffer={selectOfferHandler}
        category={item.category}
        title={item.title}
        rating={item.rating}
        old_price={item.old_price}
        discount={item.discount}
        price={item.price}
        img={item.img}
        id={item.id}
        key={item.id}
      />
    ));
  };

  //scroll to top
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  });

  return (
    <div ref={ref}>
      <Header cancelOffersCategory={ props.cancelOffersCategory }/>
      <main className="main-shop" ref={ref}>
        {/* shop-area-start*/}
        <div className="shop-area shop-inner-page pt-100 pb-100">
          <div className="container">
            <div className="row justify-content-center row-reverse">
              <div className="col-9">
                <div className="shop-wrap">
                  <h4 className="title">Მაღაზია {categoryTitle}</h4>
                  <div className="row justify-content-center">{offersList}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop-area-end */}
      </main>
      <Footer cancelOffersCategory={props.cancelOffersCategory}/>
    </div>
  );
};
export default Shop;
