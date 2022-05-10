import React from 'react';
import {Carousel} from 'react-bootstrap';
import CarouselImage1 from '../assets/Carousel/Cleaning1.jpg';
import CarouselImage2 from '../assets/Carousel/Cleaning2.jpg';
import CarouselImage3 from '../assets/Carousel/Cleaning3.jpg';
import CarouselImage4 from '../assets/Carousel/Cleaning4.jpg';
import CarouselImage5 from '../assets/Carousel/Cleaning6.jpg';
import CarouselImage6 from '../assets/Carousel/Cleaning6.jpg';
function CarouselSlider (props) {
  return (
    <div>
      <Carousel fade indicators={false}>
        <Carousel.Item interval={1000}>
          <div style={{height: '500px'}}>
            <img
              className="d-block w-100"
              src={CarouselImage1}
              alt="First slide"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div style={{height: '500px'}}>
            <img
              className="d-block w-100"
              src={CarouselImage2}
              alt="Second slide"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div style={{height: '500px'}}>
            <img
              className="d-block w-100"
              src={CarouselImage3}
              alt="Third slide"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div style={{height: '500px'}}>
            <img
              className="d-block w-100"
              src={CarouselImage4}
              alt="Third slide"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div style={{height: '500px'}}>
            <img
              className="d-block w-100"
              src={CarouselImage5}
              alt="Third slide"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div style={{height: '500px'}}>
            <img
              className="d-block w-100"
              src={CarouselImage6}
              alt="Third slide"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
