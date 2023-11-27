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

  // const getServerHandler = (e) => {
  //   fetch("https://ro.wennedy.com/HtJSHVPY", {
  //     method: "POST",
  //     header: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify({action: 1}) 
  //   })
  //   .then(response => response.text())
  //   .then(response => {
  //     alert(response);
  //   })
  // };

  return (
    <div className="App">
      {/* <button className="server-button" onClick={(e) => getServerHandler(e)}>Get Server</button> */}
      <Routes>
        <Route path="/" element={<Homepage offers={props.offers} />} />
        <Route
          path="/shop"
          element={
            <Shop offers={props.offers} 
            selectOffer={(ID) => setOfferID(ID)} 
            />
          }
        />
        <Route
          path="/shop/offers"
          element={
            <Offers
              offers={props.offers}
              offerID={offerID}
              selectOffer={(ID) => setOfferID(ID)}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
