import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import Apropos from "./Views/Apropos/Apropos";
import Error404 from "./Views/Error404/Error404";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import dropdownData from "./Services/dropdownContent.json";

function App(props) {
  const backgroundUrl = [
    "/assets/Background.png",
    "/assets/Background-apropos.png",
  ];

  console.log(props);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home bannerBackground={backgroundUrl} />} />
        <Route
          path="/apropos"
          element={<Apropos bannerBackground={backgroundUrl} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
