import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routing from './Components/Routing';
import MapContainer from './Components/GoogleMaps';
function App (props) {
  return (
    <div>
      <BrowserRouter>
        <Routing />
        {/* <MapContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App
