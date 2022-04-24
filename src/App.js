import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";

import { Login, ProductAll } from "./pages";
import {Navbar} from "./components";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("authenticate", authenticate)
  }, [authenticate])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
