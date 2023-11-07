import { BrowserRouter, Route, Outlet, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import BadShop from "./pages/badshop";
import { useEffect, useState } from "react";
import Layout from "./widgets/layout/layout";




function App() {

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/badshop" element={<BadShop />} />
    </Routes>

  );
}

export default App;
