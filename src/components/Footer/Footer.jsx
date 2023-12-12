import "./Footer.css";

//images
import delivery from "../../img/delivery.png";
import return1 from "../../img/return.png";
import headphone from "../../img/headphone.png";
import card_1 from "../../img/card.png";
import card_2 from "../../img/card-2.jpg";
import card_3 from "../../img/card-3.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer id="footer">
      {/* core-features-area */}
      <div className="core-features-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="core-features-item mb-30">
                <div className="core-features-icon">
                  <img src={delivery} alt="" />
                </div>
                <div className="core-features-content">
                  <h4 className="title">
                    მიწოდება მთელი საქართველოს მასშტაბით
                  </h4>
                  <p>თქვენ მიიღებთ თქვენს პროდუქტს რაც შეიძლება სწრაფად.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="core-features-item mb-30">
                <div className="core-features-icon">
                  <img src={return1} alt="" />
                </div>
                <div className="core-features-content">
                  <h4 className="title">სერტიფიცირებული პროდუქტები</h4>
                  <p>
                    ჩვენ არ გვაქვს ყალბი, მხოლოდ ხარისხის სერთიფიკატების მქონე
                    პროდუქტები.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="core-features-item mb-30">
                <div className="core-features-icon">
                  <img src={headphone} alt="" />
                </div>
                <div className="core-features-content">
                  <h4 className="title">მხარდაჭერა</h4>
                  <p>ჩვენ გაგიწევთ კონსულტაციას ნებისმიერ კითხვაზე.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* core-features-area-end */}
      {/* <div className="footer-top-wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-widget">
                <h4 className="fw-title">Know Us</h4>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Press Coverage</a>
                    </li>
                    <li>
                      <a href="contact.html">Business Partnership</a>
                    </li>
                    <li>
                      <a href="contact.html">Careers</a>
                    </li>
                    <li>
                      <a href="contact.html">Sehat Ke Sathi</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="footer-widget">
                <h4 className="fw-title">Our Policies</h4>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="about-us.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="contact.html">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="contact.html">Editorial Policy</a>
                    </li>
                    <li>
                      <a href="contact.html">Return Policy</a>
                    </li>
                    <li>
                      <a href="contact.html">IP Policy</a>
                    </li>
                    <li>
                      <a href="contact.html">Grievance Redressal Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
              <div className="footer-widget">
                <h4 className="fw-title">Our Services</h4>
                <div className="fw-link">
                  <ul>
                    <li>
                      <a href="about-us.html">Order Medicines</a>
                    </li>
                    <li>
                      <a href="contact.html">Book Lab Tests</a>
                    </li>
                    <li>
                      <a href="contact.html">Consult a Doctor</a>
                    </li>
                    <li>
                      <a href="contact.html">Ayurveda Articles</a>
                    </li>
                    <li>
                      <a href="contact.html">English Articles</a>
                    </li>
                    <li>
                      <a href="contact.html">1mg Care Plan</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="footer-widget">
                <h4 className="fw-title">Subscribe Our Newsletter</h4>
                <div className="f-newsletter">
                  <p>Get a free subscription to our health &amp; fitness</p>
                  <form action="#" className="newsletter-form">
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button>
                      <i className="fas fa-rocket"></i>
                    </button>
                  </form>
                </div>
                <div className="fw-download-btn">
                  <a href="#">
                    <img src={gp} alt="" />
                  </a>
                  <a href="#">
                    <img src={as} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-top-wrap">
        <div className="container">
          <div className="row justify-content-between">
            {/* <!-- <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Know Us</h4>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Press Coverage</a></li>
                                        <li><a href="#">Business Partnership</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Sehat Ke Sathi</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> --> */}
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 widget-wrapper">
              <div className="footer-widget">
                <h4 className="fw-title">ჩვენი პოლიტიკა</h4>
                <div className="fw-link">
                  <ul>
                    <li>
                      <Link to="/terms">Ვადები და პირობები</Link>
                    </li>
                    <li>
                      <Link to="/privacy">Კონფიდენციალურობის პოლიტიკა</Link>
                    </li>
                    <li>
                      <Link to="/cookie">ქუქიების პოლიტიკა</Link>
                    </li>
                    {/* <!-- <li><a href="#">Editorial Policy</a></li>
                                        <li><a href="#">Return Policy</a></li>
                                        <li><a href="#">IP Policy</a></li>
                                        <li><a href="#">Grievance Redressal Policy</a></li> --> */}
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                            <div className="footer-widget">
                                <h4 className="fw-title">Our Services</h4>
                                <div className="fw-link">
                                    <ul>
                                        <li><a href="#">Order Medicines</a></li>
                                        <li><a href="#">Book Lab Tests</a></li>
                                        <li><a href="#">Consult a Doctor</a></li>
                                        <li><a href="#">Ayurveda Articles</a></li>
                                        <li><a href="#">English Articles</a></li>
                                        <li><a href="#">1mg Care Plan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> --> */}
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="footer-widget">
                <h4 className="fw-title">Subscribe Our Newsletter</h4>
                <div className="f-newsletter">
                  <p>Get a free subscription to our health &amp; fitness</p>
                  <form action="#" className="newsletter-form">
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button>
                      <i className="fas fa-rocket"></i>
                    </button>
                  </form>
                </div>
                <!-- <div className="fw-download-btn">
                                    <a href="#"><img src="img/icon/download_btn01.png" alt=""></a>
                                    <a href="#"><img src="img/icon/download_btn02.png" alt=""></a>
                                </div> -->
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="footer-counter-wrap">
          <div className="row">
            <div className="col-12">
              <div className="fcw-title text-center mb-45">
                <h4 className="title">world LARGEST HEALTHCARE PLATFORM</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="counter-item mb-30">
                <h2 className="count">
                  <span
                    className="odometer odometer-auto-theme"
                    data-count="160"
                  >
                    <div className="odometer-inside">
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">1</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">6</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">0</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                  M+
                </h2>
                <p>Visitors</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="counter-item mb-30">
                <h2 className="count">
                  <span
                    className="odometer odometer-auto-theme"
                    data-count="27"
                  >
                    <div className="odometer-inside">
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">2</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">7</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                  M+
                </h2>
                <p>Orders Delivered</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="counter-item mb-30">
                <h2 className="count">
                  <span
                    className="odometer odometer-auto-theme"
                    data-count="190"
                  >
                    <div className="odometer-inside">
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">1</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">9</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">0</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                  K+
                </h2>
                <p>Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center copyright-wrapper" >
            <div className="col-md-6 copyright-1">
              <div className="copyright-text">
                {/* <p>Copyright © 20221 Yed. All Rights Reserved</p> */}
                <p>საავტორო უფლება © 2021 Yed. Ყველა უფლება დაცულია</p>
              </div>
            </div>
            <div className="col-md-6 copyright-2">
              <div className="payment-method-img text-center text-md-right" onClick={() => props.cancelOffersCategory()}>
                <Link to="/shop" >
                  <img src={card_1} alt="" />
                </Link>
                <Link to="/shop">
                  <img src={card_2} alt="" />
                </Link>
                <Link to="/shop">
                  <img src={card_3} alt="" />
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
