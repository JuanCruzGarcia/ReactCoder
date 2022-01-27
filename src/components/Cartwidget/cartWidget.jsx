import React from 'react'
import carrito from "./carrito.png"

const CartWidget = () => {
    return (
        <div className="">
            <a href="/carrito">
            <img src={carrito} alt="" />
            </a>
        </div>
    )
}
export default CartWidget