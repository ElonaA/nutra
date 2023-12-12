import React from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
// import formImg from "../img/form-img.png";

const Modal = ({ active, setActiv, offerTitle, offerFlow, pixel, subId, subId_2, subId_3 }) => {

  //form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  //thank-you page check
  const [submit, setSubmit] = useState(false);
  
  //check form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // http://handler'  - local server
    
    axios.post('https://garezz.com/index.php', JSON.stringify({
      ...formData,
      'subid': subId,
      'sub_id_2': subId_2,
      'sub_id_3': subId_3,
      'sub_id_4': 'vitrina',
      'pixel': pixel,
      'stream_key': offerFlow, 
    }))
      .then((response) => {
        console.log(response.data);
        let pixel_server = String(response.data.split(' ')[1])
        localStorage.setItem('pixel', pixel_server);
        setSubmit(true);
      })
      .catch((error) => {
        console.error('Ошибка при отправке данных', error);
      });

      setActiv(false);
  };

  if (submit) return <Navigate to="/thank-you" />
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
          <h1 className="main-title">შეკვეთა {offerTitle}</h1>
        </div>
        <div className="form__container">
          <div className="left">
            <h2 className="form__title">
            პროდუქტის მისაღებად შეავსეთ ქვემოთ მოცემული ველები
            </h2>
            <form className="form" onSubmit={ handleSubmit }>
              
              <label className="form__label" for="name">
              სახელი
              </label>
              <input
                name="name"
                id="name"
                className="form__input"
                placeholder="შეიყვანეთ თქვენი სახელი"
                value={formData.name}
                onChange={handleChange}
                required
              ></input>

              <label className="form__label" for="phone">
              ტელეფონი
              </label>
              <input
                name="phone"
                id="phone"
                className="form__input"
                placeholder="შეიყვანეთ თქვენი ტელეფონი: +995 ..."
                value={formData.phone}
                onChange={handleChange}
                required
              ></input>
              <button className="form__submit">იყიდე</button>
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
