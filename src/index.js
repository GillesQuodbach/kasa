import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Apropos from "./Views/Apropos/Apropos";
import Error404 from "./Views/Error404/Error404";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FicheLogement from "./Views/FicheLogement/FicheLogement";

const root = ReactDOM.createRoot(document.getElementById("root"));
const backgroundUrl = [
  "/assets/Background.png",
  "/assets/Background-apropos.png",
];
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home bannerBackground={backgroundUrl} />} />
      <Route path="/details/:id" element={<FicheLogement />} />
      <Route
        path="/apropos"
        element={<Apropos bannerBackground={backgroundUrl} />}
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

{
  /* <Route path=":id" element={<FicheLogement />} />
      <Route
        path="/apropos"
        element={<Apropos bannerBackground={backgroundUrl} />}
      />
    </Routes> */
}
