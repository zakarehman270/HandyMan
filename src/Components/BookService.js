import React from 'react';
import BookServiceButtons from './BookServiceButtons';
import Cleaning from '../assets/Carousel/Cleaning10.jpg';
function BookService (props) {
  return (
    <div
      style={{
        opacity: '0.9',
        backgroundImage: `url(${Cleaning})`,
        position: 'relative',
        paddingBottom:"40px",
        paddingTop:"40px",
      }}
    >
      <div style={{zIndex: 2}}>
        <div
          className="HeadingBookService justify-content-center align-items-center Gap FontWeight"
          style={{fontSize: '45px'}}
        >
          <p className="text-white">If You Need Any</p>
          <p className="PrimaryColor">Handyman Service Related</p>
        </div>
        <div className="d-flex justify-content-center align-items-center pt-3 pb-3">
          <BookServiceButtons />
        </div>
      </div>
    </div>
  );
}

export default BookService;
