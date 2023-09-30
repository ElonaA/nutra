import React, { useState } from "react";
import SimpleSlider from "../components/slider/slick-carousel";
import Button from "../components/inc-button";
import Modal from "./Modal";


const Offers = (props) => {
const [modalActive, setModalActive] = useState(false)
  return (
    <div>
        <div className="container">
        <section className="product-content">
                <div className="content__left">
                    <div className="search">
                        <form className="search__form">
                            <input className="search__input" type="text" placeholder="Search..."></input>
                            <button type="submit" className="search__btn">
                                <span className="material-symbols-outlined">search</span>
                            </button>
                        </form>
                    </div>
                    <h2 className="section__title">Category</h2>
                    <ul className="category__list">
                        <li className="category__item">
                            <a className="category__link" href="#">1 category</a>
                            <span className="material-symbols-outlined add-icon">add</span>
                        </li>
                        <li className="category__item">
                            <a className="category__link" href="#">2 category</a>
                            <span className="material-symbols-outlined add-icon">add</span>
                        </li>
                        <li className="category__item">
                            <a className="category__link" href="#">3 category</a>
                            <span className="material-symbols-outlined add-icon">add</span>
                        </li>
                        <li className="category__item">
                            <a className="category__link" href="#">4 category</a>
                            <span className="material-symbols-outlined add-icon">add</span>
                        </li>
                        <li className="category__item">
                            <a className="category__link" href="#">5 category</a>
                            <span className="material-symbols-outlined add-icon">add</span>
                        </li>
                        <li className="category__item">
                            <a className="category__link" href="#">6 category</a>
                            <span className="material-symbols-outlined add-icon">add</span>
                        </li>
                    </ul>

                    <h2 className="section__title">Contacts</h2>
                    <ul className="contact__list">
                        <li className="contact__item">Campany: </li>
                        <li className="contact__item">E-mail: </li>
                    </ul>
                </div>
                <div className="content__right">
                    <div className="product">
                        <div className="product__gallery">
                            <img className="product__img" src="../../img/img1.jpg"></img>
                        </div>
                        <div className="product__info">
                            <p className="product__category">Hand Sanitizer</p>
                            <h3 className="product__title">Axiom Karela Juice</h3>
                            <p className="product__status">In stock</p>
                            <p className="product__price">$44.00</p>
                            <p className="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae veniam quidem praesentium minus harum, numquam porro asperiores officiis excepturi est aliquam repellendus accusantium mollitia dolorum nihil eveniet obcaecati fugit!</p>
                            <div className="product__order">
                                <div className="product__quantity">
                                    <p className="quantity__text">Quantity:</p>
                                    <Button></Button>
                                </div>
                                <button onClick={() => setModalActive(true)} className="product__btn">Buy<span className="material-symbols-outlined btn-icon">add</span></button>
                                <Modal active={modalActive} setActiv={setModalActive}></Modal>
                            </div>
                        </div>
                    </div>

                    <div className="info-tabs">
                        <ul className="tabs">
                            <li className="tabs__item"><a class="tabs__link characteristics tabs__active">Characteristics</a></li>
                            <li className="tabs__item"><a class="tabs__link information">Order information</a></li>
                        </ul>
                        <div className="tabs__content">
                            <p className="tabs__text">1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae velit, nulla, est debitis nemo sapiente blanditiis tenetur accusamus laboriosam nobis minus voluptatum molestias consequatur neque vero eum quia, nam corrupti! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum adipisci commodi dolor dignissimos omnis, quisquam aliquam error et repudiandae inventore itaque in obcaecati numquam, iure voluptatum tempora perspiciatis voluptates perferendis?</p>
                        </div>
                    </div>
                    <h2 className="slider__titile">Related Products</h2>
                    <div className="slider__wrapper">
                        <SimpleSlider></SimpleSlider>
                    </div>
                </div> 
        </section>
        </div>

      
    </div>
  );
};

export default Offers;
