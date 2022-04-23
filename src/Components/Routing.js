import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './Home'
import Form from './Form'
function Routing () {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/form" element={<Form />} />
    </Routes>
  );
}
export default Routing;