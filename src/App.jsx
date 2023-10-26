import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Offers from "./pages/Offers/Offers";
import Categories from "./pages/Categories";
import NotFound from "./pages/404";
import Modal from "./pages/Modal";
import AdminPanel from "./pages/AdminPanel";
import Shop from "./pages/Shop/Shop";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage offers={props.offers}/>} />
        <Route path="/shop" element={<Shop offers={props.offers} />} />
        <Route path="/offers" element={<Offers offers={props.offers}/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
