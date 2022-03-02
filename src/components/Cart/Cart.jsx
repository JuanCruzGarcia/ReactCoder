import React, {useContext} from 'react';
import { context } from '../../context/CartProvider';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
export default function Cart() {

  const {cart, cleanCart, totalPrice} = useContext(context)

  return (
    <div className='estilo'>
      {
        (cart.length === 0) ?
          <div style={{textAlign:'center'}} className='altura'>
            <h2 className='textoCart'>Ups! Parece que tu carrito esta vacío</h2>
            <br/>
            <NavLink to={'/'} className='textoCart'>Ir a comprar</NavLink>
          </div>
          :
          <>
            <h2 className='textoCart'>Tu Carrito</h2> 
            {cart.map(item => <CartItem product={item.product} price={item.product.price} quantity={item.quantity} key={item.product.id}/>)}
            <h3 className='textoCart'>Total: U$D {totalPrice()}</h3>
            
            <Button variant='danger' onClick={()=>cleanCart()} style={{margin:'3%'}}>
              Vaciar Carrito
            </Button>
            
            <NavLink to={"/formCompra"}>
                        <Button variant="dark">
                          Finalizar Compra
                        </Button>
            </NavLink>
          </>
      }
    </div>
    );
};