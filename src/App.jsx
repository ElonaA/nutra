import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Offers from "./pages/Offers";
import Categories from "./pages/Categories";
import NotFound from "./pages/404";
import Modal from "./pages/Modal";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/categories">Categories</Link>
        <Link to="modal">Modal</Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/modal" element={<Modal/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
