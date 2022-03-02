import "./App.css";

import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
