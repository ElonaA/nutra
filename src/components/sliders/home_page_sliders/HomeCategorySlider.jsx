import Slider from "react-slick";

import categories_01 from "../../../img/products/categories_01.png";
import categories_02 from "../../../img/products/categories_02.png";
import categories_03 from "../../../img/products/categories_03.png";
import categories_04 from "../../../img/products/categories_04.png";
import categories_05 from "../../../img/products/categories_05.png";
import categories_06 from "../../../img/products/categories_06.png";
import categories_07 from "../../../img/products/categories_07.png";
import categories_08 from "../../../img/products/categories_08.png";

export default function HomeCategorySlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
      </div>
    ),
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
}
