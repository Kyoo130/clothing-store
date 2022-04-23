import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, ProductAll, ProductDetail } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
