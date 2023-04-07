import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/pages/Home";
import Projects from "./component/pages/Projects";
import Blog from "./component/pages/Blog";
import Contributors from "./component/pages/Contributors";
import Footer from "./component/Footer/Footer";
import Guidelines from "./component/pages/Guidelines";
import ScrollToTop from "./component/Button/ScrollToTop";
import Documents from "./component/Guidelines/pages/Documents";
import NotFound from "./component/pages/NotFound";

import "./main.css";
import Card from "./component/pages/Card.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./component";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contributors" exact element={<Contributors />}></Route>
        <Route path="/projects" exact element={<Projects />}></Route>
        <Route path="/blog" exact element={<Blog />}></Route>
        <Route path="/guidelines" exact element={<Guidelines />}></Route>
        <Route path="/guidelines/:page" exact element={<Documents />}></Route>
        <Route path="/404" exact element={<NotFound />}></Route>
        <Route path="/cards/:github" exact element={<Card />}></Route>
        <Route path="*" exact element={<Navigate to="/404" />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
