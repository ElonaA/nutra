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
import { useState } from "react";

function App(props) {
  const [offerID, setOfferID] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage offers={props.offers}/>} />
        <Route path="/shop" element={<Shop selectOffer={(ID) => setOfferID(ID)} offers={props.offers} />} />
          <Route path="/shop/offers" element={<Offers offers={props.offers} offerID={offerID}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
