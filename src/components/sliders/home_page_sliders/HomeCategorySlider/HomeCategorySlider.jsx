import Slider from "react-slick";
import React from "react";

import "./HomeCategorySlider.css";

import categories_01 from "../../../../img/products/1.jpg";
import categories_02 from "../../../../img/products/2.jpg";
import categories_03 from "../../../../img/products/3.jpg";
import categories_04 from "../../../../img/products/4.jpg";
import categories_05 from "../../../../img/products/5.jpg";
import categories_06 from "../../../../img/products/6.jpg";
import categories_07 from "../../../../img/products/7.jpg";
import categories_08 from "../../../../img/products/8.jpg";
import { Link } from "react-router-dom";

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
      speed: 900,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
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

    //select category for offers page
    const selectCategoryHandler = (cat) => {
      this.props.selectCategory(cat);
    };

    return (
      <Slider {...settings} className="row category-active mb-70">
        <div className="col" onClick={ () => selectCategoryHandler("პოტენციის გაუმჯობესება") }>
          <div className="category-item">
            <Link to="/shop">
              <img src={categories_01} alt="cat1" />
              <span className="content">პოტენციის გაუმჯობესება</span>
            </Link>
          </div>
        </div>
        <div className="col" onClick={ () => selectCategoryHandler("სახსრების დაავადებები") }>
          <div className="category-item">
            <Link to="/shop">
              <img src={categories_02} alt="cat2" />
              <span className="content">სახსრების დაავადებები</span>
            </Link>
          </div>
        </div>
        <div className="col" onClick={ () => selectCategoryHandler("ვარიკოზული ვენები") }>
          <div className="category-item">
            <Link to="/shop">
              <img src={categories_03} alt="cat3" />
              <span className="content">ვარიკოზული ვენები</span>
            </Link>
          </div>
        </div>
        <div className="col" onClick={ () => selectCategoryHandler("სმენის გაუმჯობესება") }>
          <div className="category-item">
            <Link to="/shop">
              <img src={categories_04} alt="cat4" />
              <span className="content">სმენის გაუმჯობესება</span>
            </Link>
          </div>
        </div>
        <div className="col" onClick={ () => selectCategoryHandler("გაუმჯობესებული ხედვა") }>
          <div className="category-item">
            <Link to="/shop">
              <img src={categories_05} alt="cat5" />
              <span className="content">გაუმჯობესებული ხედვა</span>
            </Link>
          </div>
        </div>
        <div className="col" onClick={ () => selectCategoryHandler("შაქრიანი დიაბეტი") }>
          <div className="category-item">
            <Link to="/shop">
              <img src={categories_06} alt="cat6" />
              <span className="content">შაქრიანი დიაბეტი</span>
            </Link>
          </div>
        </div>
        <div className="col" onClick={ () => selectCategoryHandler("სოკოს საწინააღმდეგო საშუალებები") }>
          <div className="category-item">
            <Link to="/shop">
              <img src={categories_07} alt="cat7" />
              <span className="content">სოკოს საწინააღმდეგო საშუალებები</span>
            </Link>
          </div>
        </div>
        <div className="col" onClick={ () => selectCategoryHandler("ჰიპერტენზია") }>
          <div className="category-item">
            <Link to="/shop">
              <img src={categories_08} alt="cat8" />
              <span className="content">ჰიპერტენზია</span>
            </Link>
          </div>
        </div>
      </Slider>
    );
  };
};

export default HomeCategorySlider;
