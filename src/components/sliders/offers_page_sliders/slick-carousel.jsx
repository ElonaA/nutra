import React from "react";
import Slider from "react-slick";
import SlickCarouselItem from "./SlickCarouselItem";

export default function SimpleSlider(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  //передаємо id офера на верх
  const onOfferSelectHandler = (offerId) => {
    // props.offerSelect(offerId);
    // console.log(offerId + "id");
  };
 
  // offers list for slider
  const sliderList = props.offers.map(item => <SlickCarouselItem key={item.id} category={item.category} title={item.title} price={item.price} img={item.img}/>);

  return (
    <Slider {...settings}>
      { sliderList }
    </Slider>
  );
}
