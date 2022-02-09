import React, {useContext} from 'react';
import {Button, ButtonGroup, Card, Row, Col, CardGroup} from 'react-bootstrap'
import { context } from '../../context/CartProvider';


export default function CartItem({product, quantity,price}) {

    const {deleteFromCart, oneItemMore, oneItemLess} = useContext(context)

  return (
    <CardGroup>
<Card style={{maxWidth: '800px' }}>
  <Row className='no-gutters'>
  <Col >
  <Card.Img variant="top" src={product.image} />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
      {product.description}
        
        <p>Cantidad: {quantity}</p>
        <p>Precio producto: U$D {price}</p>
        <h5>Subtotal: U$D {quantity * price}</h5>
        
    
    </Card.Text>
   <ButtonGroup>
          <Button variant='danger'  onClick={()=>oneItemLess(product.id)}> - </Button>
          <Button variant='success' onClick={()=>oneItemMore(product.id)}> + </Button>
        </ButtonGroup>
        <Button variant='danger' onClick={()=>deleteFromCart(product.id)} style={{marginLeft:'20px'}}>
          Eliminar
        </Button>
  </Card.Body>
  </Col>
  </Row>
</Card>
</CardGroup>
  );
};



