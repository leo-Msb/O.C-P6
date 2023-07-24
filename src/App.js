import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Logements from "./pages/Logements";
import About from "./pages/About";
import Error from "./pages/Error";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/logements/:id" element={<Logements />} />
          <Route path="/about" element={<About />} />

          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
