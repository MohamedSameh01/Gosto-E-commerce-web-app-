import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Home from "../Home";
import Details from "../details/Details";
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/:id">
            <Route path="/cart/:id" element={<Details/>}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
