import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import './NavBar.css'
import NavDropDown from "../NavDropDown/NavDropDown"
import CartWidget from "../CartWidget/CartWidget";
import categorias from "../../data/categorias.json"
import {NavLink} from "react-router-dom"

export default function NavBar() {

  return (
    <Navbar className=" navbar-dark bg-dark" >
      <Container>
        <Navbar.Brand  href="/">Street Clothing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft : '15%'}}>
              <Nav className="me-auto" navbarScroll>
                <Nav.Link> 
                  <NavLink to={'/'} className='link'>Inicio</NavLink>
                </Nav.Link>
                <NavDropDown title='Productos' categorias={categorias} />
                  <Nav.Link>
                    <NavLink to={'/contacto'} className='link'> Contacto</NavLink>
                  </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <CartWidget/> 
      </Container>
    </Navbar>
  );
}

