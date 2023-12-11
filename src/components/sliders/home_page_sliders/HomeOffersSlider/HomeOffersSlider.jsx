import React from "react";
import "./HomeOffersSlider.css";
import Slider from "react-slick";
import HomeOfferItem from "../../../../pages/Homepage/HomeOfferItem/HomeOfferItem";

class HomeOffersSlider extends React.Component {
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

  render() {
    //on the select offer
    const selectOfferHandler = (selectedID) => {
      this.props.selectOffer(selectedID);
    };

    // offers list
    const HomeOffersList = this.props.offers.map((item) => (
      <HomeOfferItem
        selectOffer={ selectOfferHandler }
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

    var settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
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
    };
    return (
      <Slider {...settings} className="row shop-active">
        {HomeOffersList}
      </Slider>
    );
  }
}

export default HomeOffersSlider;
