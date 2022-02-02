import React from 'react';
import { Col, Row, Image, Container, Button } from 'react-bootstrap';
import { useState } from "react";
import ItemCount from './../ItemCount/ItemCount'
import './ItemDetail.css'
import {NavLink} from "react-router-dom"

export default function ItemDetail({ item }) {

  

    const { title, price, description, image, initial, stock } = item

    const [quantity, setQuantity] = useState(null) 
    const [buttonCount, setButtonCount] = useState(true)

    function onAdd(quantity) {
        setQuantity(quantity);
        setButtonCount(false);
      }

    return (
        <Container fluid style={{display:'grid'}}>

            <Row className='row'>

                <Col className='col-imagen' sm={6}>
                    <Image src={image} fluid rounded></Image>
                </Col>

                <Col className='col-details'>
                    <h2 className='margin'>{title}</h2>
                    <h3 className='margin'>U$D {price}</h3>
                    {
                        (description)?
                        <p className='margin'>{description}</p>
                        :
                        <></>
                    }
                    {
                    buttonCount ? 
                    (
                    <ItemCount className='margin' initial={initial} stock={stock} onAdd={onAdd}/> 
                    ) :(
                        <>
    
                    <NavLink to={"/carrito"}>
                        <Button> Ver {quantity} productos </Button> 
                    </NavLink> <br/>
                    <NavLink to={"/"}>
                        <Button >Seguir comprando</Button>
                    </NavLink>
                    </>
                      )
                        
                    }
                    
                </Col>

            </Row>

        </Container>
    );
};

                  