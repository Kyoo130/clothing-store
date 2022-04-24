import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import { Login, ProductAll, ProductDetail } from "./pages";
import {Navbar} from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
