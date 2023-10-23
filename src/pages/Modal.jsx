import React from "react";
import formImg from "../img/form-img.png";

const Modal = ({ active, setActiv }) => {
  return (
    <div
      className={active ? "modal__wrapper active" : "modal__wrapper"}
      onClick={() => setActiv(false)}
    >
      <div className="form__wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="modal__top">
          <div className="close-btn__wrapper" onClick={() => setActiv(false)}>
            <span className="material-symbols-outlined close-btn">close</span>
          </div>
          <h1 className="main-title">Order (product name)</h1>
        </div>
        <div className="form__container">
          <div className="left">
            <h2 className="form__title">
              Fill out the fields bellow to recive prodduct
            </h2>
            <form className="form">
              <label className="form__label" for="name">
                Name
              </label>
              <input
                name="name"
                id="name"
                className="form__input"
                placeholder="Enter your name"
                required
              ></input>

              <label className="form__label" for="phone">
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                className="form__input"
                placeholder="Enter your phone"
                required
              ></input>
              <button className="form__submit">Buy</button>
            </form>
          </div>

          <div className="right">
            <div className="bacground"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
