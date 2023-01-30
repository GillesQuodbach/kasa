import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import Apropos from "./Views/Apropos/Apropos";
import Error404 from "./Views/Error404/Error404";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
