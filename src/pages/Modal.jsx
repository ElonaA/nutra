import React from "react";
import axios from "axios";
import { useState } from "react";
// import formImg from "../img/form-img.png";



const Modal = ({ active, setActiv, offerTitle, offerFlow, subId, pixel }) => {


  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    axios.post('http://handler', JSON.stringify({
      ...formData,
      'subid': subId,
      'sub_id_2': 'mish',
      'sub_id_3': 'metka',
      'sub_id_4': 'vitrina',
      'stream_key': offerFlow,
      'pixel': pixel,
    }))
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при отправке данных', error);
      });
      setActiv(false);
  };


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
          <h1 className="main-title">Order {offerTitle}</h1>
        </div>
        <div className="form__container">
          <div className="left">
            <h2 className="form__title">
              Fill out the fields bellow to recive prodduct
            </h2>
            <form className="form" onSubmit={ handleSubmit }>
              
              <label className="form__label" for="name">
                Name
              </label>
              <input
                name="name"
                id="name"
                className="form__input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
