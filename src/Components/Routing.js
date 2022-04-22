import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './Home'
import Form from './Form'
// import CoverLetter from './CoverLetter'
function Routing () {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/form" element={<Form />} />
      {/* <Route exact path="/cover-letter" element={<CoverLetter />} />  */}
    </Routes>
  );
}
export default Routing;