import "./Header.css";

import { Link } from "react-router-dom";
import logo from "../../img/header/logo.png";
import cart from "../../img/header/cart.png";
import cart1 from "../../img/header/cart1.jpg";
import cart2 from "../../img/header/cart2.jpg";

const Header = (props) => {
  return (
    <header>
      <div id="sticky-header" className="menu-area">
        <div className="container">

          {/* тимчасово вимикаємо - бургер меню */}
          {/* <div className="mobile-nav-toggler">
            <i className="fas fa-bars"></i>
          </div> */}
          <div className="menu-wrap">
            <nav className="menu-nav">
              <div className="row align-items-center">
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>

                      {/* тимчасово викнули - не видаляти! */}
                      {/* <li className="menu-item-has-children">
                        <Link to="/categories">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="blog.html">Our Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li> */}

                      {/* тимчасово викнули - не видаляти! */}
                      {/* <li className="active menu-item-has-children">
                          <Link to="/offers">Shop</Link>
                          <ul className="sub-menu">
                            <li className="active">
                              <a href="shop.html">Our Shop</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fas fa-angle-down"></span>
                          </div>
                        </li> */}
                      <li className="active menu-item-has-children">
                        <Link to="/shop">Shop</Link>

                        {/* тимчасово викнули - не видаляти! */}
                        {/* <ul className="sub-menu">
                          <li className="active">
                            <Link to="/shop">Our Shop</Link>
                          </li>
                          <li>
                            <Link to="/offers">Shop Details</Link>
                          </li>
                        </ul> */}
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>

                      {/* тимчасово викнули - не видаляти! */}
                      {/* <li>
                        <Link to="#">ASK DOCTOR</Link>
                      </li> */}

                      <li>
                        <Link to="/admin">Admin Panel</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3">
                  <div className="logo">
                    <a href="#">
                      <img src={ logo } alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 col-md-9">

                  {/* тичасово вимикаємо - права частина хедера, корзина і т д */}
                  {/* <div className="header-action">
                    <ul>
                      <li className="header-search">
                        <form action="#">
                          <button>
                            <i className="fas fa-search"></i>
                          </button>
                          <input
                            type="text"
                            placeholder="Search fre Medicines"
                          />
                        </form>
                      </li>
                      <li className="header-user d-none d-md-block">
                        <a href="contact.html">
                          <i className="far fa-user"></i>
                        </a>
                      </li>
                      <li className="header-shop-cart d-none d-md-flex">
                        <a href="#">
                          <img src={cart} alt="" />
                          <span className="cart-count">0</span>
                        </a>
                        <span className="cart-price">$0.00</span>
                        <ul className="minicart">
                          <li className="d-flex align-items-start">
                            <div className="cart-img">
                              <a href="#">
                                <img src={cart1} alt="" />
                              </a>
                            </div>
                            <div className="cart-content">
                              <h4>
                                <a href="#">Exclusive Winter Jackets</a>
                              </h4>
                              <div className="cart-price">
                                <span className="new">$229.9</span>
                                <span>
                                  <del>$229.9</del>
                                </span>
                              </div>
                            </div>
                            <div className="del-icon">
                              <a href="#">
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </div>
                          </li>
                          <li className="d-flex align-items-start">
                            <div className="cart-img">
                              <a href="#">
                                <img src={cart2} alt="" />
                              </a>
                            </div>
                            <div className="cart-content">
                              <h4>
                                <a href="#">Winter Jackets For Women</a>
                              </h4>
                              <div className="cart-price">
                                <span className="new">$229.9</span>
                                <span>
                                  <del>$229.9</del>
                                </span>
                              </div>
                            </div>
                            <div className="del-icon">
                              <a href="#">
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="total-price">
                              <span className="f-left">Total:</span>
                              <span className="f-right">$239.9</span>
                            </div>
                          </li>
                          <li>
                            <div className="checkout-link">
                              <a href="#">Shopping Cart</a>
                              <a className="black-color" href="#">
                                Checkout
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </nav>
          </div>

          {/* тимчасово вимкнули - не видаляти! */}
          {/* <!-- Mobile Menu  --> */}
          {/* <div className="mobile-menu">
                        <nav className="menu-box">
                            <div className="close-btn"><i className="fas fa-times"></i></div>
                            <div className="nav-logo"><a href="#"><img src="img/logo/logo.png" alt="" title=""/></a>
                            </div>
                            <div className="menu-outer"> */}
                                {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                            {/* </div>
                            <div className="social-links">
                                <ul className="clearfix">
                                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                                    <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
              </div> */}
          {/* <div className="menu-backdrop"></div> */}
          {/* <!-- End Mobile Menu --> */}
        </div>
      </div>

      {/* тимчасово викнули - не видаляти */}
      {/* <div className="header-category d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-category-wrap">
                <div className="header-cat-list">
                  <ul>
                    <li>
                      <a href="shop.html">Health Store</a>
                    </li>
                    <li>
                      <a href="shop.html">COLLECTIONS</a>
                    </li>
                    <li>
                      <a href="shop.html">protein Store</a>
                    </li>
                    <li>
                      <a href="shop.html">Pharmacy</a>
                    </li>
                    <li>
                      <a href="shop.html">Tests</a>
                    </li>
                    <li>
                      <a href="shop.html">MedPlus</a>
                    </li>
                    <li>
                      <a href="shop.html">BEAUTY</a>
                    </li>
                  </ul>
                </div>
                <div className="header-category-btn">
                  <a href="shop.html">GET 5% OFF NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* тимчасово-вимкнули - не видаляти! */}
      {/* breadcrumb-area */}
      {/* <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Shop
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* breadcrumb-area-end */}
    </header>
  );
};
export default Header;
