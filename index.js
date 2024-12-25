import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import Board from "./Board";
import Contact from "./Contact";
import Dob from "./Dob";
import Donate from "./Donate";
import Gallery from "./Gallery";
import Home from "./Home";
import Primary from "./Primary";
import Program from "./Program";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./components/Footer";
ReactDOM.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/board" element={<Board/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/donate" element={<Donate/>}></Route>
    <Route path="/gallery" element={<Gallery/>}></Route>
    <Route path="/primary" element={<Primary/>}></Route>
    <Route path="/program" element={<Program/>}></Route>
    <Route path="/dob" element={<Dob/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>,document.getElementById("root")
);