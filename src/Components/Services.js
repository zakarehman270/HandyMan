import React from 'react';
import Service from './Service';
import CleaningImage from '../assets/Icons/CleaningConvert.jpg';
import carPainter from '../assets/Icons/carPainter.jpg';
import deepCleaning from '../assets/Icons/deepCleaning.png';
import Electrician from '../assets/Icons/electrician.webp';
import Handyman from '../assets/Icons/handyman.jpg';
import paintWork from '../assets/Carousel/Cleaning1.jpg';
import plumbing from '../assets/Icons/plumbing.jpg';
function Services (props) {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center Gap pb-5">
        <p className="PrimaryColor HeadingOurServices">Our</p>
        <p className="HeadingOurServices">Services</p>
      </div>
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{gap: '100px'}}
      >
        <Service image={CleaningImage} Heading={'Cleaning'} />
        <Service image={carPainter} Heading={'Car Painter'} />
        <Service image={deepCleaning} Heading={'Deep Cleaning'} />
        <Service image={Electrician} Heading={'Electrician'} data={"First hour include survey and 1 hour job, after that 60 drhm for every 30 minutes"} />
        <Service image={Handyman} Heading={'Handy Man'} data={"First hour include survey and 1 hour job, after that 60 drhm for every 30 minutes"} />
        <Service image={paintWork} Heading={'Paint Work'} />
        <Service image={plumbing} Heading={'Plumbing'} data={"First hour include survey and 1 hour job, after that 60 drhm for every 30 minutes"} />
      </div>

    </div>
  );
}

export default Services;
