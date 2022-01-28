import React from 'react'
import carrito from "./carrito.png"
import { NavLink } from "react-router-dom"


const CartWidget = () => {
    return (
    
    <NavLink to={'/carrito'}> 
        <img src={carrito} alt="carrito"/>
    </NavLink>
        
    )
}
export default CartWidget

