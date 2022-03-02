import React, {useContext} from 'react';
import {Button, ButtonGroup, Row, Col, Container,Image} from 'react-bootstrap'
import { context } from '../../context/CartProvider';
import './CartItem.css'


export default function CartItem({product, quantity,price}) {

    const {deleteFromCart, oneItemMore, oneItemLess} = useContext(context)

  return (
    <section className='fondo'>
<Container fluid style={{display:'grid'}}>

<Row className='row'>

    <Col className='col-imagen' sm={6}>
        <Image src={product.image} fluid rounded></Image>
    </Col>

    <Col className='col-details'>
        <h2 className='margin'>{product.title}</h2>

        <p>Cantidad: {quantity}</p>
        <p>Precio producto: U$D {price}</p>
        <h5>Subtotal: U$D {quantity * price}</h5>

       <ButtonGroup>
          <Button variant='danger'  onClick={()=>oneItemLess(product.id)}> - </Button>
          <Button variant='success' onClick={()=>oneItemMore(product.id)}> + </Button>
        </ButtonGroup>
        <Button variant='danger' onClick={()=>deleteFromCart(product.id)} style={{marginLeft:'20px'}}>
          Eliminar
        </Button>
    </Col>

</Row>

</Container>
</section>
//     <CardGroup>
// <Card style={{maxWidth: '800px' }}>
//   <Row className='no-gutters'>
//   <Col >
//   <Card.Img variant="top" src={product.image} />
//   </Col>
//   <Col>
//   <Card.Body>
//     <Card.Title>{product.title}</Card.Title>
//     <Card.Text>
//       {product.description}
        
//         <p>Cantidad: {quantity}</p>
//         <p>Precio producto: U$D {price}</p>
//         <h5>Subtotal: U$D {quantity * price}</h5>
        
    
//     </Card.Text>
//    <ButtonGroup>
//           <Button variant='danger'  onClick={()=>oneItemLess(product.id)}> - </Button>
//           <Button variant='success' onClick={()=>oneItemMore(product.id)}> + </Button>
//         </ButtonGroup>
//         <Button variant='danger' onClick={()=>deleteFromCart(product.id)} style={{marginLeft:'20px'}}>
//           Eliminar
//         </Button>
//   </Card.Body>
//   </Col>
//   </Row>
// </Card>
// </CardGroup>
  );
};
