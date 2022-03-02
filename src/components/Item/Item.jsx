import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Item.css'


export default function Item({ item }) {

    const { title, price, description, image, id } = item

    return (
        <Card className='card'>
            <Card.Img className='Body' variant="top" src={image} />
            <Card.Body className='Body'>
                <Card.Title className=''>{title}</Card.Title>
                <Card.Text className=''>
                    <h5> {price} U$D </h5><br/>
                    <p>{description}</p>
                </Card.Text>
                {/* Este button me tiene que redireccionar al itendetailcontainer */}
                <Button>
                <NavLink to={`/item/${id}`}> Ver Producto</NavLink>
                </Button>
            </Card.Body>
        </Card>
    
    );
};

