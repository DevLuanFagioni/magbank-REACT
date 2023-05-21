import React from 'react';
import './Navbar.scss';
import {Container, Nav, Navbar, Button, ButtonGroup, Dropdown, DropdownButton }  from 'react-bootstrap';
import logo from '../assets/svg/logo.svg';

const Navigation = () => {
  return (
    <Navbar expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Magbank logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link className='text-light' href="#cartao">Cartão</Nav.Link>
            <Nav.Link className='text-light' href="#quemsomos">Quem Somos</Nav.Link>
            <Nav.Link className='text-light' href="#faq">FAQ</Nav.Link>
          </Nav>
          <ButtonGroup>
            <DropdownButton variant='outline-light' as={ButtonGroup} title="Acessar Minha Conta" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1" variant='outline-light' >Conta Fisica</Dropdown.Item>
              <Dropdown.Item eventKey="2" variant='outline-light' >Conta Juridica</Dropdown.Item>
            </DropdownButton>
            <Button variant='outline-light' >Abra sua conta</Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default Navigation;