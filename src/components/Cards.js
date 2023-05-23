import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import post1 from "../assets/jpg/post-1.jpg";
import post2 from "../assets/jpg/post-2.jpg";
import post3 from "../assets/jpg/post-3.jpg";
import "./Cards.scss";

const Cards = () => {
  return (
    <Container>
      <Row className="cards text-center">
        <Col lg className="d-flex flex-column align-items-center mb-5 text-start">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={post1} />
            <Card.Body>
              <Card.Title>The standard Lorem Ipsum</Card.Title>
              <Card.Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </Card.Text>
              <Button variant="danger">Peça já</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg className="d-flex flex-column align-items-center mb-5 text-start" >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={post2} />
            <Card.Body>
              <Card.Title>The standard Lorem Ipsum</Card.Title>
              <Card.Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </Card.Text>
              <Button variant="danger">Peça já</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg className="d-flex flex-column align-items-center mb-5 text-start" >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={post3} />
            <Card.Body>
              <Card.Title>The standard Lorem Ipsum</Card.Title>
              <Card.Text>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </Card.Text>
              <Button variant="danger">Peça já</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
