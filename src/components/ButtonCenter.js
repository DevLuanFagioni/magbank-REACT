import React from "react";
import { Container, Button} from "react-bootstrap";
import "./ButtonCenter.scss";


const ButtonCenter = () => {
  return (
    <Container className="text-center pb-5">
        <Button className="px-5 py-2" variant="success" >Abra sua conta</Button>
    </Container>
  );
}

export default ButtonCenter;