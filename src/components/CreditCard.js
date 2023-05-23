import React from "react";
import {Image, Row, Col, Container} from 'react-bootstrap';
import { CreditCardFill, PhoneFill, CartFill, PersonVcardFill } from 'react-bootstrap-icons';
import credit from '../assets/jpg/credit-card.jpg'
import './CreditCard.scss'

const CreditCard = () => {
  return (
    <Container>
      <Row className="credit_card" > 
        <Col lg className="d-flex flex-column align-items-center d-lg-block" >
          <Row className="mb-4">
              <h1>Cartão de crédito</h1>
          </Row>
          <Row>
            <Col lg className="ms-5 ms-lg-0" >
              <p><CreditCardFill color="#f05656" size={20}/> Crédito Pessoal</p>
              <p><PhoneFill color="#f05656" size={20}/>  APP</p>
            </Col>
            <Col lg className="ms-5 ms-lg-0" >
              <p><CartFill color="#f05656" size={20}/>  Pagamento Online</p>
              <p><PersonVcardFill color="#f05656" size={20}/>  Carteira Digital</p>
            </Col>
          </Row>
        </Col>
        <Col lg className="text-center mt-3 mt-lg-0" >
          <Image src={credit} className="w-75" />
        </Col>
      </Row>
    </Container>
  )
};

export default CreditCard;