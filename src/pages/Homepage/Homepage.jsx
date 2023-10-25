import React from "react";

import "../../style.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// images
  // додати через стилі для слайдера
  import slider_bg01 from "../../img/slider/slider_bg01.jpg"; 
  import slider_bg02 from "../../img/slider/slider_bg02.jpg";
  import slider_bg03 from "../../img/slider/slider_bg03.jpg";
  import slider_bg04 from "../../img/slider/slider_bg04.jpg";
import categories_01 from "../../img/products/categories_01.png";
import categories_02 from "../../img/products/categories_02.png";
import categories_03 from "../../img/products/categories_03.png";
import categories_04 from "../../img/products/categories_04.png";
import categories_05 from "../../img/products/categories_05.png";
import categories_06 from "../../img/products/categories_06.png";
import categories_07 from "../../img/products/categories_07.png";
import categories_08 from "../../img/products/categories_08.png";
import shop_img01 from "../../img/products/shop_img01.jpg";
import shop_img02 from "../../img/products/shop_img02.jpg";
import shop_img03 from "../../img/products/shop_img03.jpg";
import shop_img04 from "../../img/products/shop_img04.jpg";
import shop_img05 from "../../img/products/shop_img05.jpg";
import deal_week_img01 from "../../img/products/deal_week_img01.jpg";
import deal_week_img02 from "../../img/products/deal_week_img02.jpg";
import deal_week_img03 from "../../img/products/deal_week_img03.jpg";
import deal_week_img04 from "../../img/products/deal_week_img04.jpg";
import deal_week_img05 from "../../img/products/deal_week_img05.jpg";
import testimonial_img01 from "../../img/images/testimonial_img01.png";
import testimonial_img02 from "../../img/images/testimonial_img02.png";
import testimonial_img03 from "../../img/images/testimonial_img03.png";


const Homepage = (props) => {
  return (
    <div>
      <Header />
      <main>
        
        {/* <!-- slider-area --> */}
        <section className="slider-area">
          <div classNameName="slider-active">
            <div
              classNameName="single-slider slider-bg d-flex align-items-center"
              data-background={slider_bg01}
            >
              <div className="container container-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <h4
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        top <span>deal !</span>
                      </h4>
                      <h2
                        className="title"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        servikal gloves
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".9s">
                        Get up to 50% off Today Only
                      </p>
                      <a
                        href="#"
                        className="btn"
                        data-animation="fadeInUp"
                        data-delay="1.2s"
                      >
                        contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider slider-bg d-flex align-items-center"
              data-background={slider_bg02}
            >
              <div className="container container-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <h4
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        top <span>deal !</span>
                      </h4>
                      <h2
                        className="title"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        ONLINE PHARMACY
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".9s">
                        Get up to 50% off Today Only
                      </p>
                      <a
                        href="#"
                        className="btn"
                        data-animation="fadeInUp"
                        data-delay="1.2s"
                      >
                        contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider slider-bg d-flex align-items-center"
              data-background={slider_bg03}
            >
              <div className="container container-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <h4
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        top <span>Digital</span>
                      </h4>
                      <h2
                        className="title"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        Pressure Monitor
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".9s">
                        Get up to 50% off Today Only
                      </p>
                      <a
                        href="#"
                        className="btn"
                        data-animation="fadeInUp"
                        data-delay="1.2s"
                      >
                        contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider slider-bg d-flex align-items-center"
              data-background={slider_bg04}
            >
              <div className="container container-inner">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="slider-content">
                      <h4
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        top <span>deal !</span>
                      </h4>
                      <h2
                        className="title"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
                        ONLINE PHARMACY
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".9s">
                        Get up to 50% off Today Only
                      </p>
                      <a
                        href="#"
                        className="btn"
                        data-animation="fadeInUp"
                        data-delay="1.2s"
                      >
                        contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- slider-area-end--> */}
        {/* <!-- categories-area --> */}
        <section className="categories-area pt-85 pb-25">
          <div className="container">
            <div className="row align-items-end mb-35">
              <div className="col-lg-6 col-md-8">
                <div className="category-title">
                  <span>EXPLORE</span>
                  <h3 className="title">Popular Categories</h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="category-view">
                  <a href="#">View AlL</a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row category-active mb-70">
              <div className="col">
                <div className="category-item">
                  <a href="#">
                    <img src={categories_01} alt="cat1" />
                    <span className="content">Health &amp; Partein</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <a href="#">
                    <img src={categories_02} alt="cat2" />
                    <span className="content">Sesual Well</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <a href="#">
                    <img src={categories_03} alt="cat3" />
                    <span className="content">Health &amp; Partein</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <a href="#">
                    <img src={categories_04} alt="cat4" />
                    <span className="content">Vitamin C Tablet</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <a href="#">
                    <img src={categories_05} alt="cat5" />
                    <span className="content">Health &amp; Partein</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <a href="#">
                    <img src={categories_06} alt="cat6" />
                    <span className="content">Medicinal Kit</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <a href="#">
                    <img src={categories_07} alt="cat7" />
                    <span className="content">Sanitary Napkin</span>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="category-item">
                  <a href="#">
                    <img src={categories_08} alt="cat8" />
                    <span className="content">Health &amp; Partein</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row shop-active">
              <div className="col">
                <div className="shop-item mb-60">
                  <div className="shop-thumb">
                    <a href="#">
                      <img src={ shop_img01 } alt="" />
                    </a>
                  </div>
                  <div className="shop-content">
                    <span className="cat">Sanitizers</span>
                    <h5 className="title">
                      {" "}
                      <a href="#">Axiom Karela Jamun Juice</a>
                    </h5>
                    <div className="shop-item-rating">
                      <span className="avg-rating">
                        {" "}
                        3.2 <i className="far fa-star"></i>
                      </span>
                      <span className="total-rating">349 Ratings</span>
                    </div>
                    <p className="shop-discount">
                      MRP <del>$300</del>{" "}
                      <span className="discount-off">6% OFF</span>
                    </p>
                    <div className="shop-bottom">
                      <ul>
                        <li className="price">$97.00</li>
                        <li className="add">
                          <a href="#">ADD +</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="shop-item mb-60">
                  <div className="shop-thumb">
                    <a href="#">
                      <img src={shop_img02} alt="" />
                    </a>
                  </div>
                  <div className="shop-content">
                    <span className="cat">Juice</span>
                    <h5 className="title">
                      {" "}
                      <a href="#">Episoft AC Sunscreen Cream</a>
                    </h5>
                    <div className="shop-item-rating">
                      <span className="avg-rating">
                        {" "}
                        4.5 <i className="far fa-star"></i>
                      </span>
                      <span className="total-rating">240 Ratings</span>
                    </div>
                    <p className="shop-discount">
                      MRP <del>$300</del>{" "}
                      <span className="discount-off">6% OFF</span>
                    </p>
                    <div className="shop-bottom">
                      <ul>
                        <li className="price">$370.00</li>
                        <li className="add">
                          <a href="#">ADD +</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="shop-item mb-60">
                  <div className="shop-thumb">
                    <a href="#">
                      <img src={shop_img03} alt="" />
                    </a>
                  </div>
                  <div className="shop-content">
                    <span className="cat">Microscope</span>
                    <h5 className="title">
                      {" "}
                      <a href="#">Glucon-D Instant Energy</a>
                    </h5>
                    <div className="shop-item-rating">
                      <span className="avg-rating">
                        {" "}
                        4.2 <i className="far fa-star"></i>
                      </span>
                      <span className="total-rating">349 Ratings</span>
                    </div>
                    <p className="shop-discount">
                      MRP <del>$300</del>{" "}
                      <span className="discount-off">6% OFF</span>
                    </p>
                    <div className="shop-bottom">
                      <ul>
                        <li className="price">$280.00</li>
                        <li className="add">
                          <a href="#">ADD +</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="shop-item mb-60">
                  <div className="shop-thumb">
                    <a href="#">
                      <img src={shop_img04} alt="" />
                    </a>
                  </div>
                  <div className="shop-content">
                    <span className="cat">Mask</span>
                    <h5 className="title">
                      {" "}
                      <a href="#">Axiom Karela Jamun Juice</a>
                    </h5>
                    <div className="shop-item-rating">
                      <span className="avg-rating">
                        {" "}
                        3.2 <i className="far fa-star"></i>
                      </span>
                      <span className="total-rating">349 Ratings</span>
                    </div>
                    <p className="shop-discount">
                      MRP <del>$300</del>{" "}
                      <span className="discount-off">6% OFF</span>
                    </p>
                    <div className="shop-bottom">
                      <ul>
                        <li className="price">$52.00</li>
                        <li className="add">
                          <a href="#">ADD +</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="shop-item mb-60">
                  <div className="shop-thumb">
                    <a href="#">
                      <img src={shop_img05} alt="" />
                    </a>
                  </div>
                  <div className="shop-content">
                    <span className="cat">Juice</span>
                    <h5 className="title">
                      {" "}
                      <a href="#">La Shield Sunscreen Gel SPF 40</a>
                    </h5>
                    <div className="shop-item-rating">
                      <span className="avg-rating">
                        {" "}
                        4.2 <i className="far fa-star"></i>
                      </span>
                      <span className="total-rating">145 Ratings</span>
                    </div>
                    <p className="shop-discount">
                      MRP <del>$300</del>{" "}
                      <span className="discount-off">6% OFF</span>
                    </p>
                    <div className="shop-bottom">
                      <ul>
                        <li className="price">$45.00</li>
                        <li className="add">
                          <a href="#">ADD +</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- categories-area-end --> */}
        {/* <!-- deal-week-area --> */}
        <section className="deal-week-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-30">
                  <h3 className="title">Deal Of This Week</h3>
                  <p>
                    Want everyone to see it and find myself sharing the link
                    anywhere
                  </p>
                </div>
                <div className="deal-week-countdown mb-50">
                  <div className="coming-time" data-countdown="2022/1/29"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 order-2 order-lg-0">
                <div className="deal-week-item">
                  <div className="deal-week-inner">
                    <div className="deal-week-thumb">
                      <img src={deal_week_img01} alt="" />
                    </div>
                    <div className="deal-week-content">
                      <span>medical</span>
                      <h4 className="title">
                        <a href="#">
                          Temperature <span>UP TO 25%</span>
                        </a>
                      </h4>
                      <a href="#" className="btn">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="deal-week-item">
                  <div className="deal-week-inner">
                    <div className="deal-week-thumb">
                      <img src={deal_week_img02} alt="" />
                    </div>
                    <div className="deal-week-content">
                      <span>medical</span>
                      <h4 className="title">
                        <a href="#">
                          sanitizer Max <span>UP TO 25%</span>
                        </a>
                      </h4>
                      <a href="#" className="btn">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4">
                <div className="deal-week-item dw-big-item">
                  <div className="deal-week-inner">
                    <div className="deal-week-content">
                      <span>medical pack</span>
                      <h4 className="title">
                        <a href="#">
                          Lab Face Mask <span>UP TO 25%</span>
                        </a>
                      </h4>
                      <a href="#" className="btn">
                        shop now
                      </a>
                    </div>
                    <div className="deal-week-thumb">
                      <img
                        src={deal_week_img03}
                        className="main-img"
                        alt=""
                      />
                      <img
                        src="img/products/dw_item_des.png"
                        className="discount-img"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="deal-week-item">
                  <div className="deal-week-inner">
                    <div className="deal-week-thumb">
                      <img src={deal_week_img04} alt="" />
                    </div>
                    <div className="deal-week-content">
                      <span>covid-19</span>
                      <h4 className="title">
                        <a href="#">
                          co vaccine <span>UP TO 25%</span>
                        </a>
                      </h4>
                      <a href="#" className="btn">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="deal-week-item">
                  <div className="deal-week-inner">
                    <div className="deal-week-thumb">
                      <img src={deal_week_img05} alt="" />
                    </div>
                    <div className="deal-week-content">
                      <span>medical pack</span>
                      <h4 className="title">
                        <a href="#">
                          hand gloves <span>UP TO 25%</span>
                        </a>
                      </h4>
                      <a href="#" className="btn">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- deal-week-area-end --> */}
        {/* <!-- testimonial-area --> */}
        <section className="testimonial-area testimonial-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center mb-45">
                  <h3 className="title">Our Client Says</h3>
                  <p>Want everyone to see it and find myself sharing</p>
                </div>
              </div>
            </div>
            <div className="row testimonial-active">
              <div className="col-xl-4">
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src={testimonial_img01} alt="" />
                  </div>
                  <div className="testi-content">
                    <p>
                      “ Want everyone to see and find myself sharing the link
                      Lorem Ipsum is simply dummy text of printing typesing
                      industry ”
                    </p>
                    <div className="testi-avatar-info">
                      <h5 className="title">E. Tomas Felix</h5>
                      <span>Founder. CEO</span>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src={testimonial_img02} alt="" />
                  </div>
                  <div className="testi-content">
                    <p>
                      “ Want everyone to see and find myself sharing the link
                      Lorem Ipsum is simply dummy text of printing typesing
                      industry ”
                    </p>
                    <div className="testi-avatar-info">
                      <h5 className="title">G. Faeian Felix</h5>
                      <span>Founder. CEO</span>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src={testimonial_img03} alt="" />
                  </div>
                  <div className="testi-content">
                    <p>
                      “ Want everyone to see and find myself sharing the link
                      Lorem Ipsum is simply dummy text of printing typesing
                      industry ”
                    </p>
                    <div className="testi-avatar-info">
                      <h5 className="title">D. Nova Lunap</h5>
                      <span>Founder. CEO</span>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="testimonial-item">
                  <div className="testi-img">
                    <img src="img/images/testimonial_img02.png" alt="" />
                  </div>
                  <div className="testi-content">
                    <p>
                      “ Want everyone to see and find myself sharing the link
                      Lorem Ipsum is simply dummy text of printing typesing
                      industry ”
                    </p>
                    <div className="testi-avatar-info">
                      <h5 className="title">M. Hisana Kulan</h5>
                      <span>Founder. CEO</span>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- testimonial-area-end --> */}



        {/* shop-area - буде окремо*/}
        {/* на Shop page */}
        {/* shop-area-end */}
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
