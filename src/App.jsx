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
import Modal from "./pages/Modal";
import AdminPanel from "./pages/AdminPanel";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import { useEffect, useState } from "react";

function App(props) {
  const [offerID, setOfferID] = useState(0);
  const [subId, setSubId] = useState("");
  const [pixel, setPixel] = useState("");

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
              subId={subId}
              pixel={pixel}
              selectOffer={(ID) => setOfferID(ID)}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
