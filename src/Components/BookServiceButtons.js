import React from 'react';

import {Link} from 'react-router-dom';
function BookServiceButtons () {
  return (
    <Link
      onClick={() => {
        window.scrollTo (0, 0);
      }}
      className="text-decoration-none text-black"
      to="/form"
      state={{from: ''}}
    >
      <div className="BookServiceButtons BackGroundColor text-center">
        Book Your Service Now
      </div>
    </Link>
  );
}
export default BookServiceButtons;
