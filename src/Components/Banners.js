import React from 'react';
function Banners (props) {
  return (
    <div className="CardsBanners BackGroundColor">
      <div className='BannersOuterWidth'>
        <div className="OuterWrapperBannerImage">
          <img
            src={props.image}
            alt="teamwork"
            style={{width: '56px', color: '#FFBB00'}}
          />
        </div>
      </div>
      <div >
        <p className="TextInCard">{props.name}</p>
      </div>
    </div>
  );
}

export default Banners;
