import Slider from "react-slick";
import React from "react";

import "./HomeCategorySlider.css";

import categories_01 from "../../../../img/products/categories_01.png";
import categories_02 from "../../../../img/products/categories_02.png";
import categories_03 from "../../../../img/products/categories_03.png";
import categories_04 from "../../../../img/products/categories_04.png";
import categories_05 from "../../../../img/products/categories_05.png";
import categories_06 from "../../../../img/products/categories_06.png";
import categories_07 from "../../../../img/products/categories_07.png";
import categories_08 from "../../../../img/products/categories_08.png";

class HomeCategorySlider extends React.Component {
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
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings} className="row category-active mb-70">
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
      </Slider>
    );
  };
};

export default HomeCategorySlider;
