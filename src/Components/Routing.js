import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './Home'
import Form from './Form'
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";

function Routing () {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/form/:id" element={<Form />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
} 
export default Routing;