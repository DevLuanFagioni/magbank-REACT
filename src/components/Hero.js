import React from 'react';
import {Button, Image, Row, Col} from 'react-bootstrap';
import logo from '../assets/png/magic-pay-mobile.png';
import logoDesktop from '../assets/png/magic-pay.png';
import './Hero.scss'

const Hero = () => {
  return (
    <div className='text-center text-light hero' >
      <Row className='py-5' > 
        <Col lg className='text-lg-end mt-lg-5' > 
          <Image  className='d-lg-none' src={logo} />  
          <Image  className='d-none d-lg-inline-block' src={logoDesktop} />      
        </Col>
        <Col lg className='text-lg-start mt-lg-5 mt-4'>  
          <p> Pague suas contas pelo nosso APP </p>
          <Button variant='outline-light' > Abra sua conta </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;