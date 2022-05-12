import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Explorer from "./pages/Explorer";
import EcoStats from "./pages/EcoStats";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Footer from "./components/Footer";
import Corals from "./pages/Corals";
import Bee from "./pages/Bee";
import Rhinos from "./pages/Rhinos";

function App() {
  return (
    <div className="App bg-homeBg bg-cover">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/ecostats" element={<EcoStats />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/explorer/corails" element={<Corals />} />
          <Route path="/explorer/bee" element={<Bee />} />
          <Route path="/explorer/rhinos" element={<Rhinos />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
