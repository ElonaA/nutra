import "./Shop.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import ShopOfferItem from "./ShopOfferItem/ShopOfferItem";

const Shop = (props) => {
  
  // offers list
  const offersList = props.offers.map((item) => (
    <ShopOfferItem
      category={item.category}
      title={item.title}
      rating={item.rating}
      old_price={item.old_price}
      discount={item.discount}
      price={item.price}
      img={item.img}
    />
  ));

  return (
    <div>
      <Header />
      <main>
        {/* shop-area-start*/}
        <div className="shop-area shop-inner-page pt-100 pb-100">
          <div className="container">
            <div className="row justify-content-center row-reverse">
              <div className="col-3 order-2 order-lg-0">
                <aside className="shop-sidebar">
                  <div className="widget">
                    <div className="sidebar-search">
                      <form action="#">
                        <input type="text" placeholder="Search ..." />
                        <button type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">Category</h4>
                    <div className="shop-cat-list">
                      <ul>
                        <li>
                          <a href="shop.html">
                            Medication <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Disposable <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            PPE-Kit <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Face-Mask <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Safety-Suits <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Eye-Protect <span>+</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">Top Brand</h4>
                    <div className="shop-brand-list">
                      <ul>
                        <li>
                          <a href="shop.html">Medication</a>
                        </li>
                        <li>
                          <a href="shop.html">Carnation</a>
                        </li>
                        <li>
                          <a href="shop.html">Suppke</a>
                        </li>
                        <li>
                          <a href="shop.html">WeBeyond</a>
                        </li>
                        <li>
                          <a href="shop.html">Edstudy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">Filter by Price</h4>
                    <div className="price_filter">
                      <div
                        id="slider-range"
                        className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                      >
                        <div
                          className="ui-slider-range ui-widget-header ui-corner-all"
                          style={{ left: "14.2857%", width: "64.2857%" }}
                        ></div>
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabindex="0"
                          style={{ left: "14.2857%" }}
                        ></span>
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabindex="0"
                          style={{ left: "78.5714%" }}
                        ></span>
                      </div>
                      <div className="price_slider_amount">
                        <span>Price :</span>
                        <input
                          type="text"
                          id="amount"
                          name="price"
                          placeholder="Add Your Price"
                        />
                        <input type="submit" className="btn" value="Filter" />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-9">
                <div className="shop-wrap">
                  <h4 className="title">Shop</h4>
                  <div className="shop-page-meta mb-30">
                    <div className="shop-grid-menu">
                      <ul>
                        <li className="active">
                          <a href="#">
                            <i className="fas fa-th"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-list"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-showing-result">
                      <p>Total Items 1-12 of 13</p>
                    </div>
                    <div className="shop-show-list">
                      <form action="#">
                        <label for="show">Show</label>
                        <select
                          id="show"
                          className="selected"
                          style={{ display: "none" }}
                        >
                          <option value="">08</option>
                          <option value="">12</option>
                          <option value="">16</option>
                          <option value="">18</option>
                          <option value="">20</option>
                        </select>
                        <div className="nice-select selected" tabindex="0">
                          <span className="current">08</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              08
                            </li>
                            <li data-value="" className="option">
                              12
                            </li>
                            <li data-value="" className="option">
                              16
                            </li>
                            <li data-value="" className="option">
                              18
                            </li>
                            <li data-value="" className="option">
                              20
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                    <div className="shop-short-by">
                      <form action="#">
                        <label for="shortBy">Sort By</label>
                        <select
                          id="shortBy"
                          className="selected"
                          style={{ display: "none" }}
                        >
                          <option value="">Sort by latest</option>
                          <option value="">Low to high</option>
                          <option value="">High to low</option>
                          <option value="">Popularity</option>
                        </select>
                        <div className="nice-select selected" tabindex="0">
                          <span className="current">Sort by latest</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              Sort by latest
                            </li>
                            <li data-value="" className="option">
                              Low to high
                            </li>
                            <li data-value="" className="option">
                              High to low
                            </li>
                            <li data-value="" className="option">
                              Popularity
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    { offersList }

                    {/* замінено на offersList */}
                    {/* <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_1} alt="product-1" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[0].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[0].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              3.2 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            <del>14 GEL</del>
                            <span className="discount-off">100% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[0].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_2} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[1].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[1].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            <del>14 GEL</del>
                            <span className="discount-off">100% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[1].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_3} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[2].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[2].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                            
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            <del>30 GEL</del>
                            <span className="discount-off">100% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[2].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_4} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[3].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[3].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            <del>99 GEL</del>
                            <span className="discount-off">92% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[3].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_5} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[4].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[4].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                             <del>159.8 GEL</del>
                            <span className="discount-off">100% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[4].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_6} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[5].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[5].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              3.2 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            <del>30 GEL</del>
                            <span className="discount-off">50% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[5].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_7} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[6].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[6].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            <del>15 GEL</del>
                            <span className="discount-off">50% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[6].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_8} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[7].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[7].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            <del>100 GEL</del>{" "}
                            <span className="discount-off">75% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[7].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_9} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[8].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[8].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                             <del>30 GEL</del>
                            <span className="discount-off">50% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[8].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_10} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[9].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[9].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                             <del>30 GEL</del>
                            <span className="discount-off">50% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[9].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_11} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[10].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[10].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              3.2 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                             <del>30 GEL</del>
                            <span className="discount-off">50% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[10].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src={offer_12} alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">{props.offers[11].category}</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                            {props.offers[11].title}
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                             <del>30 GEL</del>
                            <span className="discount-off">100% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">{props.offers[11].price}</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="shop-page-meta">
                    <div className="shop-grid-menu">
                      <ul>
                        <li className="active">
                          <a href="#">
                            <i className="fas fa-th"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-list"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-showing-result">
                      <p>Total Items 1-12 of 13</p>
                    </div>
                    <div className="shop-show-list">
                      <form action="#">
                        <label for="bottomShow">Show</label>
                        <select
                          id="bottomShow"
                          className="selected"
                          style={{ display: "none" }}
                        >
                          <option value="">08</option>
                          <option value="">12</option>
                          <option value="">16</option>
                          <option value="">18</option>
                          <option value="">20</option>
                        </select>
                        <div className="nice-select selected" tabindex="0">
                          <span className="current">08</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              08
                            </li>
                            <li data-value="" className="option">
                              12
                            </li>
                            <li data-value="" className="option">
                              16
                            </li>
                            <li data-value="" className="option">
                              18
                            </li>
                            <li data-value="" className="option">
                              20
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                    <div className="shop-pagination">
                      <ul>
                        <li className="active">
                          <a href="shop.html">1</a>
                        </li>
                        <li>
                          <a href="shop.html">2</a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <i className="fas fa-angle-double-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop-area-end */}
      </main>
      <Footer />
    </div>
  );
};
export default Shop;
