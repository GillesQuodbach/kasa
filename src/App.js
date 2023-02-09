import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Views/Home/Home";
import Apropos from "./Views/Apropos/Apropos";
import Error404 from "./Views/Error404/Error404";
import FicheLogement from "./Views/FicheLogement/FicheLogement";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const backgroundUrl = [
    "/assets/Background.png",
    "/assets/Background-apropos.png",
  ];
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home bannerBackground={backgroundUrl} />} />
        <Route path="/details/:id" element={<FicheLogement />} />
        <Route
          path="/apropos"
          element={<Apropos bannerBackground={backgroundUrl} />}
        />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

/* <Header />
<Routes>
  <Route path="/" element={<Home bannerBackground={backgroundUrl} />} />
  <Route path="/details/:id" element={<FicheLogement />} />
  <Route
    path="/apropos"
    element={<Apropos bannerBackground={backgroundUrl} />}
  />
  <Route path="/404" element={<Error404 />} />
  <Route path="*" element={<Navigate to="/404" replace />} />
</Routes>
<Footer /> */
