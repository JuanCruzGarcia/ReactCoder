import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import './NavBar.css'
import NavDropDown from "../NavDropDown/NavDropDown"
import CartWidget from "../CartWidget/CartWidget";
import {BrowserRouter, Switch, Route, useParams, Link, NavLink} from "react-router-dom"

export default function NavBar() {

  const items = [
    { name : 'Remeras', link : '/remeras'},
    { name : 'Hoodie', link : '/hoodie'},
    { name : 'Pantalones', link : '/pantalones'},
	{ name : 'Camperas', link : '/camperas'}
  ]

  return (
    <Navbar className=" navbar-dark bg-dark" >
      <Container>
        <Navbar.Brand className='titulo' href="/home">Street Clothing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft : '15%'}}>
              <Nav className="me-auto letra" navbarScroll>
                <Nav.Link href="/home">Inicio</Nav.Link>
                <NavDropDown title='Productos' items={items} />
                   <Nav.Link href="/contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <CartWidget/> 
      </Container>
    </Navbar>
  );
}

