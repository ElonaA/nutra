import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Offers from "./pages/Offers";
import Categories from "./pages/Categories";
import NotFound from "./pages/404";
import Modal from "./pages/Modal";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
