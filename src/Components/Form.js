import React, {useState, useRef} from 'react';
import { useLocation } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Handyman from '../assets/Handyman.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import {Data, ServiceData} from './AreaJsonData';
import {FaAngleDown} from 'react-icons/fa';
import DatePicker from 'react-date-picker';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
function Form (props) {
  const [Name, setName] = useState ('');
  const [Email, setEmail] = useState ('');
  const [Phone, setPhone] = useState ();
  const [Message, setMessage] = useState ('');
  const [CheckMArk, setCheckMArk] = useState (false);
  const [Address, setAddress] = useState ('');
  const [ValidationFName, setValidationFName] = useState (false);
  const [ValidationEmail, setValidationEmail] = useState (false);
  const [ValidationPhone, setValidationPhone] = useState (false);
  const [ValidationAddress, setValidationAddress] = useState (false);
  const [ValidationService, setValidationService] = useState (false);
  const [ValidationArea, setValidationArea] = useState (false);
  const [ErrorMessage, setErrorMessage] = useState ('');
  const [DisplayDropDown, setDisplayDropDown] = useState (false);
  const [IndexSelectedDropDown, setIndexSelectedDropDown] = useState (0);
  const [IndexSelectedDropDownArea, setIndexSelectedDropDownArea] = useState (
    0
  );
  const [Service, setService] = useState ('Choose Service');
  const [Area, setArea] = useState ('Area');
  const [DisplayDropDownArea, setDisplayDropDownArea] = useState (false);
  const [DateValue, setDateValue] = useState (new Date ());
  const [Hours, setHours] = useState (1);
  const [DisplayDropDownHours, setDisplayDropDownHours] = useState (false);
  const [IndexSelectedDropDownHours, setIndexSelectedDropDownHours] = useState (
    0
  );
  const [HoursData, setHoursData] = useState ([1,2, 3, 4, 5, 6, 7, 8]);
  const [PriceValue, setPriceValue] = useState(115)
  const [VatValue, setVatValue] = useState(5.75)
  const location = useLocation()
  const { from } = location.state
  console.log ('jj',from);

  const sendEmail = e => {
   
    if (
      Name !== '' &&
      Email !== '' &&
      Phone !== '' &&
      Address !== '' &&
      Area !== 'Area' &&
      Service !== 'Choose Service'
    ) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test (Email)) {
        e.preventDefault ();
        emailjs
          .sendForm (
            'service_m3a8ghh',
            'template_hlt5h37',
            e.target,
            '7-LaeKLbW5EG0u8An'
          )
          .then (
            result => {
              console.log (result.text);
            },
            error => {
              console.log (error.text);
            }
          );
        e.target.reset ();
      } else {
        setErrorMessage ('invalid Email');
        setValidationEmail (true);
      }
    } else {
      e.preventDefault ();
      if (Name === '') {
        setValidationFName (true);
      } else {
        setValidationFName (false);
      }
      if (Email === '') {
        setValidationEmail (true);
      } else {
        setValidationEmail (false);
      }
      if (Phone === '') {
        setValidationPhone (true);
      } else {
        setValidationPhone (false);
      }
      if (Address === '') {
        setValidationAddress (true);
      } else {
        setValidationAddress (false);
      }
      if (Area === 'Area') {
        setValidationArea (true);
      } else {
        setValidationArea (false);
      }
      if (Service === 'Choose Service') {
        setValidationService (true);
      } else {
        setValidationService (false);
      }
    }
  };

  return (
    <div>
      <Header />
      <div
        className="FormBackGroundImage"
        style={{
          opacity: '0.9',
          backgroundImage: `url(${Handyman})`,
        }}
      >

        <Container>

          <div
            className=" text-center w-100 pt-4 flex-nowrap justify-content-center align-items-center Gap FontWeight"
            style={{fontSize: '45px'}}
          >
            <span className="text-white">Get</span>
            <span className="PrimaryColor">Start</span>
          </div>

          <Row className=" d-flex justify-content-center order-1">
            <Col className=" d-flex  justify-content-center">
              <div className="d-flex flex-column w-100">
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="name" className="Label">Name:</label>
                  <input
                    type="text"
                    className="FormsInputFields"
                    placeholder="Name"
                    style={{borderColor: ValidationFName ? 'red' : ''}}
                    value={Name}
                    onChange={e => {
                      setName (e.target.value);
                      setValidationFName (false);
                    }}
                  />
                </div>
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="email" className="Label">Email:</label>
                  <input
                    type="text"
                    className="FormsInputFields"
                    placeholder="Email"
                    style={{borderColor: ValidationEmail ? 'red' : ''}}
                    value={Email}
                    onChange={e => {
                      setEmail (e.target.value);
                      setValidationEmail (false);
                      setErrorMessage ('');
                    }}
                  />
                </div>
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="phone" className="Label">Phone:</label>
                  <PhoneInput
                    defaultCountry="AE"
                    placeholder="Enter phone number"
                    className="FormsInputFieldsDatePicker"
                    style={{borderColor: ValidationPhone ? 'red' : ''}}
                    value={Phone}
                    onChange={e => {
                      setPhone ();
                      setValidationPhone (false);
                    }}
                  />

                </div>
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="phone" className="Label">
                    Choose Area:
                  </label>
                  <div className="OuterContainerDropDown">
                    <div>
                      <p
                        className="FormsInputFieldsDropDown"
                        style={{borderColor: ValidationArea ? 'red' : ''}}
                        onClick={() => {
                          setDisplayDropDown (!DisplayDropDown);
                        }}
                      >
                        {Area}
                        <FaAngleDown style={{fontSize: '20px'}} />
                      </p>
                    </div>
                    {DisplayDropDown &&
                      <div className="OuterWrapperDropDown">
                        {Data.map ((item, index) => {
                          let selected = false;
                          if (IndexSelectedDropDown === index) {
                            selected = true;
                          }
                          return (
                            <div
                              key={index}
                              className="DropDownLabel"
                              style={{color: selected ? '#FFBB00' : ''}}
                              onClick={() => {
                                setIndexSelectedDropDown (index);
                                setArea (item.name);
                                setDisplayDropDown (false);
                                setValidationArea (false);
                              }}
                            >
                              {item.name}
                            </div>
                          );
                        })}
                      </div>}
                  </div>
                </div>
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="phone" className="Label">
                    How many hours do you need your professional to stay?
                  </label>
                  <div className="OuterContainerDropDown">
                    <div>
                      <p
                        className="FormsInputFieldsDropDown"
                        onClick={() => {
                          setDisplayDropDownHours (!DisplayDropDownHours);
                        }}
                      >
                        {Hours}
                        <FaAngleDown style={{fontSize: '20px'}} />
                      </p>
                    </div>
                    {DisplayDropDownHours &&
                      <div className="OuterWrapperDropDown">
                        {HoursData.map ((item, index) => {
                          let selected = false;
                          if (IndexSelectedDropDownHours === index) {
                            selected = true;
                          }
                          return (
                            <div
                              key={index}
                              className="DropDownLabel"
                              style={{color: selected ? '#FFBB00' : ''}}
                              onClick={() => {
                                setIndexSelectedDropDownHours (index);
                                setHours (item);
                                let TotalPrice = item*115;
                                let TotalVat = item*5.75
                                setPriceValue(TotalPrice)
                                setVatValue(TotalVat)
                                setDisplayDropDownHours (false);
                              }}
                            >
                              {item}
                            </div>
                          );
                        })}
                      </div>}
                  </div>
                  <p className="LabelContentUnderHoursDropDown">
                    {from}
                  </p>
                </div>

                <div className="DisplayButtonsUpper">
                  <form
                    onClick={sendEmail}
                    className="BookServiceButtons  text-center BackGroundColor mt-3 FontSize20 FontWeight "
                  >
                    <div className="d-none">
                      <textarea
                        name="message"
                        value={`name: ${Name} email: ${Email} phone: ${Phone} address: ${Address}
                         date:${Date} area:${Area} service${Service} message:${Message} totalPrice${PriceValue+VatValue}
                         `}
                         onChange={()=>{
                           console.log("ching")
                         }}
                      />
                    </div>
                    Submit
                  </form>
                </div>
 
              </div>
            </Col>
            <Col className=" d-flex justify-content-center">
              <div className="d-flex flex-column w-100">
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="phone" className="Label">
                    Choose Service:
                  </label>
                  <div className="OuterContainerDropDown">
                    <div>
                      <p
                        className="FormsInputFieldsDropDown"
                        style={{borderColor: ValidationService ? 'red' : ''}}
                        onClick={() => {
                          setDisplayDropDownArea (!DisplayDropDownArea);
                        }}
                      >
                        {Service}
                        <FaAngleDown style={{fontSize: '20px'}} />
                      </p>
                    </div>
                    {DisplayDropDownArea &&
                      <div className="OuterWrapperDropDown">
                        {ServiceData.map ((item, index) => {
                          let selected = false;
                          if (IndexSelectedDropDownArea === index) {
                            selected = true;
                          }
                          return (
                            <div
                              key={index}
                              className="DropDownLabel"
                              style={{color: selected ? '#FFBB00' : ''}}
                              onClick={() => {
                                setIndexSelectedDropDownArea (index);
                                setService (item.name);
                                setDisplayDropDownArea (false);
                                setValidationService (false);
                              }}
                            >
                              {item.name}
                            </div>
                          );
                        })}
                      </div>}
                  </div>
                </div>
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="email" className="Label">Date:</label>
                  <DatePicker
                    className="FormsInputFieldsDatePicker"
                    onChange={setDateValue}
                    value={DateValue}
                  />
                </div>
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="phone" className="Label">Address:</label>
                  <input
                    type="text"
                    className="FormsInputFields"
                    placeholder="Address"
                    style={{borderColor: ValidationAddress ? 'red' : ''}}
                    value={Address}
                    onChange={e => {
                      setAddress (e.target.value);
                      setValidationAddress (false);
                    }}
                  />
                </div>
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="phone" className="Label">Message:</label>
                  <textarea
                    className="FormsInputFields"
                    placeholder="Phone"
                    rows={5}
                    cols={5}
                    value={Message}
                    onChange={e => {
                      setMessage (e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex flex-column  pb-2">
                  <label htmlFor="phone" className="Label text-center">
                    Price Details
                  </label>
                  <div className="FormsInputFieldsDatePicker ContentPriceDetails FontWeight">
                    <div className="d-flex justify-content-between pb-2">
                      <p>PRICE</p>
                      <p>{PriceValue}</p>
                    </div>
                    <div className="d-flex justify-content-between pb-2">
                      <p>VAT</p>
                      <p>{VatValue}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>TOTAL PRICE</p>
                      <p style={{color: '#FFBB00'}}>{PriceValue+VatValue}</p>
                    </div>
                  </div>
                  <div className="DisplayButtonsLower">
                    <form
                      onClick={sendEmail}
                      className="BookServiceButtons  text-center BackGroundColor mt-3 FontSize20 FontWeight "
                    >
                      <div className="d-none">
                        <textarea
                          name="message"
                          value={`name: ${Name} email: ${Email} phone: ${Phone} 
                          address: ${Address} date:${Date} area:${Area} service${Service}
                          message:${Message} totalPrice${PriceValue+VatValue} `}
                          onChange={()=>{
                            console.log("chaing")
                          }}
                        />
                      </div>
                      Submit
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {ErrorMessage && <div>{ErrorMessage}</div>}
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
