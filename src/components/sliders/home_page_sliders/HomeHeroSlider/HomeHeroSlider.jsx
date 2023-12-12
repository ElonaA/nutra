import Slider from "react-slick";
import "./HomeHeroSlider.css";
import React from "react";
import { Link } from "react-router-dom";



class HomeHeroSlider extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  
  render () {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      vertical: true,
      fade: true,
    };

    return (
      <section className="slider-area">
        <Slider {...settings} className="slider-active">
          <div className="single-slider slider-bg bg-1 d-flex align-items-center">
            <div className="container container-inner">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="slider-content">
                    {/* <h4
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".3s"
                    >
                      top <span>deal !</span>
                    </h4> */}
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                    >
                      გაწუხებთ სახსრების ტკივილი?
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".9s">
                    მიიღეთ 50%-იანი ფასდაკლება ართროზის საუკეთესო საშუალებებზე დღესვე.
                    </p>
                    <Link to="/shop"
                      onClick = {() => this.props.selectCategory("სახსრების დაავადებები")}
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay="1.2s"
                    >
                      უფრო ვრცლად
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider slider-bg bg-2 d-flex align-items-center">
            <div className="container container-inner">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="slider-content">
                    {/* <h4
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".3s"
                    >
                      top <span>deal !</span>
                    </h4> */}
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                    >
                      არტერიული წნევის შესამცირებელი საშუალებები
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".9s">
                    მიიღეთ 100%-მდე ფასდაკლება მხოლოდ დღეს
                    </p>
                    <Link to="/shop"
                      onClick = {() => this.props.selectCategory("ჰიპერტენზია")}
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay="1.2s"
                    >
                      უფრო ვრცლად
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* <div className="single-slider slider-bg bg-3 d-flex align-items-center">
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
                      href="#footer"
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
          <div className="single-slider slider-bg bg-4 d-flex align-items-center">
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
                      href="#footer"
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
          </div> */}
        </Slider>
      </section>
    );
  }
  
};

export default HomeHeroSlider;
