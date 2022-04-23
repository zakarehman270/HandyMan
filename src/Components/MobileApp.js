import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MobileAppImage from '../assets/MobileApp.png';
import googleAppStore from '../assets/Icons/googleAppStore.png'
import appStore from '../assets/Icons/appStore.jpg'
function MobileApp () {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="text-end">
            <div className="d-flex mt-5">
              <p className="PrimaryColor HeadingDownloadApp">Download </p>
              
              <p className="HeadingDownloadApp">
                The App
              </p>
            </div>
            <div className="d-flex text-start FontSize16">
              <p>
                Choose and book from 100+ services and track them
                <br />
                on the go with the 800 Handyman App
              </p>
            </div>
            <br />
            <br />
            <br />
            <p className="text-start FontSize16">
              Send a link Via SMS to install the app
            </p>
            <div className="d-flex Gap pt-3" >
              <input type="text" placeholder="+92XXXXXXXXXXX" style={{textAlign:"center"}}  />
              <p className='ButtonsTextAppLink'>TEXT APP LINK</p>
            </div>

            <div className=" text-start">
                <img src={googleAppStore} alt="googleAppStore" style={{width:"50%"}} />
                <img src={appStore} alt="appStore" style={{width:"40%"}} />
            </div>

          </Col>
          <Col className="text-end MobileAppImage">
            <img src={MobileAppImage} alt="MobileApp" style={{width: '80%'}} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default MobileApp;
