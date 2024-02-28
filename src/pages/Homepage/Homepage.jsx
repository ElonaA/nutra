import React from "react";


import "./Homepage.css"; //ВІДКЛЮЧАЄМО І ПЕРЕПИСУЄМО НА МОДУЛЬНІ в Homepage.module.css!!!


import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import HomeHeroSlider from "../../components/sliders/home_page_sliders/HomeHeroSlider/HomeHeroSlider";
import HomeCategorySlider from "../../components/sliders/home_page_sliders/HomeCategorySlider/HomeCategorySlider";
import HomeOffersSlider from "../../components/sliders/home_page_sliders/HomeOffersSlider/HomeOffersSlider";
import HomeTestimonialSlider from "../../components/sliders/home_page_sliders/HomeTestimonialSlider/HomeTestimonialSlider";
import { Link } from "react-router-dom";

const Homepage = (props) => {
  return (
    <div>
      <Header cancelOffersCategory={props.cancelOffersCategory}/>
      <main>
        <HomeHeroSlider selectCategory={props.selectCategory}/>
        {/* <!-- slider-area-end--> */}
        {/* <!-- categories-area --> */}
        <section className="categories-area pt-85 pb-25">
          <div className="container">
            <div className="row align-items-end mb-35">
              <div className="col-lg-6 col-md-8">
                <div className="category-title">
                  <span>ᲒᲐᲛᲝᲙᲕᲚᲔᲕᲐ</span>
                  <h3 className="title">პოპულარული კატეგორიები</h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="category-view" onClick={() => props.cancelOffersCategory()}>
                  <Link to="/shop">Ყველას ნახვა</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <HomeCategorySlider 
              offers={props.offers}
              selectCategory={props.selectCategory}
            />
            <HomeOffersSlider
              offers={props.offers}
              offerID={props.offerID}
              selectOffer={props.selectOffer}
            />
          </div>
        </section>
        {/* <!-- categories-area-end --> */}

        {/* <!-- testimonial-area --> */}
        <section className="testimonial-area testimonial-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center mb-45">
                  <h3 className="title">ჩვენი კლიენტი ამბობს</h3>
                  <p>მინდა, რომ ყველამ ნახოს და ვიპოვო ჩემი გაზიარება</p>
                </div>
              </div>
            </div>
            <HomeTestimonialSlider />
          </div>
        </section>
        {/* <!-- testimonial-area-end --> */}
      </main>
      <Footer cancelOffersCategory={props.cancelOffersCategory}/>
    </div>
  );
};

export default Homepage;
