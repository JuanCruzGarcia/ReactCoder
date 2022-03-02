import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import './NavBar.css'
import NavDropDown from "../NavDropDown/NavDropDown"
import CartWidget from "../CartWidget/CartWidget";
import categorias from "../../data/categorias.json"
import {NavLink} from "react-router-dom"
import Logo from "../../Imagenes/LogoEtiqueta.png"

export default function NavBar() {

  return (
<Navbar expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand  href="/"><img src={Logo} alt=""  style={{width: "3rem"}} /> Street Clothing</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> 
              <NavLink to={'/'} className='link'>Inicio</NavLink>
            </Nav.Link>
            <NavDropDown title="Productos" id="basic-nav-dropdown" categorias={categorias} />
            <Nav.Link>
              <NavLink to={'/contacto'} className='link'> Contacto</NavLink>
            </Nav.Link>
          </Nav>
          <CartWidget/> 
        </Navbar.Collapse>
        
  </Container>
</Navbar>
  );
}

