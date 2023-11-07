import Slider from "react-slick";

import testimonial_img01 from "../../../../img/images/testimonial_img01.png";
import testimonial_img02 from "../../../../img/images/testimonial_img02.png";
import testimonial_img03 from "../../../../img/images/testimonial_img03.png";

const HomeTestimonialSlider = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="row testimonial-active">
      <div className="col-xl-4">
        <div className="testimonial-item">
          <div className="testi-img">
            <img src={testimonial_img01} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ Want everyone to see and find myself sharing the link Lorem
              Ipsum is simply dummy text of printing typesing industry ”
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
              “ Want everyone to see and find myself sharing the link Lorem
              Ipsum is simply dummy text of printing typesing industry ”
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
              “ Want everyone to see and find myself sharing the link Lorem
              Ipsum is simply dummy text of printing typesing industry ”
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
            <img src={testimonial_img02} alt="" />
          </div>
          <div className="testi-content">
            <p>
              “ Want everyone to see and find myself sharing the link Lorem
              Ipsum is simply dummy text of printing typesing industry ”
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
    </Slider>
  );
};
export default HomeTestimonialSlider;
