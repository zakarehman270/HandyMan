import React from 'react';
import {Link} from 'react-router-dom';
function Service (props) {
  return (
    <div className="outerWrapperServices">
      <Link
        onClick={() => {
          window.scrollTo (0, 0);
        }}
        className="text-decoration-none text-black"
        to= '/form'
        state={{ from: props.data }}
      >
        <div className="OuterWrapperServicesImages">
          <img src={props.image} alt={props.image} style={{width: '90px'}} />
        </div>
        <p className="pt-2 PrimaryColor FontWeight ServiceHeading">
          {props.Heading}
        </p>
      </Link>
    </div>
  );
}

export default Service;
