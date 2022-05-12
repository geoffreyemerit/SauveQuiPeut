import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Explorer from "./pages/Explorer";
import EcoStats from "./pages/EcoStats";
import About from "./pages/About";
import Connect from "./pages/Connect";

function App() {
  return (
    <div className="App bg-homeBg h-screen">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/ecostats" element={<EcoStats />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
