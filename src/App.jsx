import "./App.css";

// Діми файл
import "./style.css";

// додаткові - Я
import "./style_new/bootstrap.min.css";
import "./style_new/style-new.css";

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Offers from "./pages/Offers/Offers";
import Categories from "./pages/Categories";
import NotFound from "./pages/404";
import Modal from "./pages/Offers/Modal/Modal";
import AdminPanel from "./pages/AdminPanel";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import { useEffect, useState } from "react";
import ThankYouPage from "./pages/Offers/ThankYouPage/ThankYouPage";

function App(props) {
  const [offerID, setOfferID] = useState(0);

//params for for submit
  const [pixel, setPixel] = useState("");
  const [subId, setSubId] = useState("");
  const [subId_2, setSubId_2] = useState("");
  const [subId_3, setSubId_3] = useState("");
  

  //get sub_id from URL
  useEffect(() => {
   
    if (String(document.location.href).includes('sub_id')) {
      let str = String(document.location.href)
      str = str.split("?");
      let str_2 = str[1].split("&");
      let str_3 = str_2[0].split("=");
      let sub_id = str_3[1];
      if (sub_id) {
        console.log(sub_id);
        setSubId(String(sub_id));
      }
    };

  }, []);
  //get sub_id_2 from URL
  useEffect(() => {
   
    if (String(document.location.href).includes('sub2')) {
      let str = String(document.location.href)
      str = str.split("?");
      let str_2 = str[1].split("&");
      let str_3 = str_2[2].split("=");
      let sub_id_2 = str_3[1];
      if (sub_id_2) {
        console.log(sub_id_2);
          setSubId_2(String(sub_id_2));
      }
    };

  }, []);
  //get sub_id_3 from URL
  useEffect(() => {
   
    if (String(document.location.href).includes('sub3')) {
      let str = String(document.location.href)
      str = str.split("?");
      let str_2 = str[1].split("&");
      let str_3 = str_2[3].split("=");
      let sub_id_3 = str_3[1];
      if (sub_id_3) {
        console.log(sub_id_3);
        setSubId_3(String(sub_id_3));
      }
    };

  }, []);
  //get pixel from URL
  useEffect(() => {
   
    if (String(document.location.href).includes('pixel')) {
      let str = String(document.location.href)
      console.log(str);
      str = str.split("?");
      let str_2 = str[1].split("&");
      let str_3 = str_2[1].split("=");
      let pixel = str_3[1];
      if (pixel) {
        console.log(pixel)
        setPixel(String(pixel));
      }
    };

  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage offers={props.offers} />} />
        <Route
          path="/shop"
          element={
            <Shop offers={props.offers} selectOffer={(ID) => setOfferID(ID)} />
          }
        />
        <Route
          path="/shop/offers"
          element={
            <Offers
              offers={props.offers}
              offerID={offerID}
              selectOffer={(ID) => setOfferID(ID)}
              pixel={pixel}
              subId={subId}
              subId_2={subId_2}
              subId_3={subId_3}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/thank-you" element={<ThankYouPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
