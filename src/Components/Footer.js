import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import {GrLocation} from 'react-icons/gr';
import {MdOutlinePhoneInTalk} from 'react-icons/md';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

function Footer (props) {
  return (
    <div style={{backgroundColor: '#0D0D0D'}}>
      <Container>
        <Row>
          <Col className="pt-5 pb-5 text-white">
            <p className="FooterLeftContent">
              800 handyman mainly focuses in making life easy
              <br />
              and hassle free for the home maker by providing
              <br />
              {' '}
              best service at the best price,that to all under  one
              <br />
              {' '}
              roof.
            </p>
            <br />
            <br />
            <p className="FooterLeftContent">
              It is a product of INFINITY Facilities Management
              <br />
              {' '}
              and Services L.L.C.
            </p>
          </Col>
          <Col className="pt-5 pb-5 text-white">
            <p className="HeadingFooterMidContent FontWeight">
              Popular Services
            </p>
            <Row className="FooterMidContent">
              <Col>
                <p>Cleaning</p>
                <p>deep cleaning</p>
                <p>handyman</p>
                <p>plumbing</p>
              </Col>
              <Col>
                <p>carpenter</p>
                <p>paint work</p>
                <p>electeician</p>
              </Col>
            </Row>
          </Col>
          <Col
            className="pt-5 pb-5 text-start"
            style={{backgroundColor: '#FFBB00'}}
          >
            
              <div className="d-flex Gap FontWeight" style={{fontSize: '32px'}}>
                <p className="text-white">Contact </p>
                <p>Us</p>
              </div>
            
            <div className="d-flex mt-3 align-items-center Gap FontSize20 FontWeight">
              <GrLocation />
              <p>Location</p>
            </div>
            <hr style={{color: 'black', opacity: 'unset'}} />
            <div className="d-flex  align-items-center Gap FontSize20 FontWeight">
              <MdOutlinePhoneInTalk />
              <p>03313571616</p>
            </div>
            <div className="d-flex Gap mt-5 FontSize20 ">
              <BsInstagram className="SocialIconsInFooter" />
              <FaFacebookF className="SocialIconsInFooter" />
              <FaTwitter className="SocialIconsInFooter" />
            </div>
          </Col>
        </Row>

      </Container>
      <div style={{backgroundColor: '#000000'}}>
        <Container>
          <Row className="p-4 d-flex justify-content-between text-white">
            <Col> <p>©2018 800 Handyman. All Rights Reserved.</p> </Col>
            <Col className=" text-end">
              <p>
                Design and developed by Royex Technologies
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
