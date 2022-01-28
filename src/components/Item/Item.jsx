import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Item.css'


export default function Item({ item }) {

    const { title, price, description, image, id } = item

    return (
        <Card className='card'>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title className='padding'>{title}</Card.Title>
                <Card.Text className='padding'>
                     {price} U$D <br/>
                    {description}
                </Card.Text>
                {/* Este button me tiene que redireccionar al itendetailcontainer */}
                <Button variant='primary'>
                <NavLink to={`/item/${id}`} className='link'> Ver Producto</NavLink>
                </Button>
            </Card.Body>
        </Card>
    
    );
};
