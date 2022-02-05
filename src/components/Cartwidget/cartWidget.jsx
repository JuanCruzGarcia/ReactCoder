import React, {useContext} from "react"
import { NavLink } from "react-router-dom"
import carrito from "./carrito.png"
import './CartWidget.css'
import { context } from "../../context/CartProvider"

export default function CartWidget(){

    const {total} = useContext(context)


    return (
        <div>
            <NavLink to={'/carrito'}> 
                <img src={carrito} alt="carrito"/>
                <span>{total}</span>
            </NavLink>
        </div>
    )
}