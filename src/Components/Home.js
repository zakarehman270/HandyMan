import './Style.css';
import Header from './Header';
import CarouselSlider from './Carousel';
import Banners from './Banners';
import Services from './Services';
import BookService from './BookService';
import {Container} from 'react-bootstrap';
import WhyChoseUs from './WhyChoseUs';
import MobileApp from './MobileApp';
import Footer from './Footer';
import teamwork from '../assets/Icons/teamwork.png';
import justice from '../assets/Icons/justice.png';
import shield from '../assets/Icons/shield.png';
import {Element} from 'react-scroll';
function Home () {
  return (
    <div>
      <Header />
      <CarouselSlider />
      <div className="outerWrapperBanners">
        <Container>
          <div
            className="p-5 d-flex justify-content-center flex-wrap"
            style={{gap: '12px'}}
          >
            <Banners image={teamwork} name={'Professional staff'} />
            <Banners image={shield} name={'Safety & Experience'} />
            <Banners image={justice} name={'Fair Price'} />
          </div>
        </Container>
      </div>
      <Element id="our-services">
        <Container className="pt-5 pb-5"><Services /></Container>
      </Element>
      <Element id="book-service">
        <div className="pb-5"><BookService /></div>
      </Element>
      <div className="pb-5">
        <Element id="why-choose-us?">
          <WhyChoseUs />
        </Element>
      </div>
      <div className="pb-5"><BookService /></div>
      <div className="pb-5"><MobileApp /></div>
      <Footer />
    </div>
  );
}

export default Home;
