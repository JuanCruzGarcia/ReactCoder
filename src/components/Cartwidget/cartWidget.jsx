import React, {useContext} from "react"
import { NavLink } from "react-router-dom"
import carrito from "./carrito.png"
import './CartWidget.css'
import { context } from "../../context/CartProvider"
import { Badge } from "react-bootstrap";

export default function CartWidget(){

    const {total} = useContext(context)


    return (
        <div>
            <NavLink to={'/carrito'} className="cart"> 
                <img src={carrito} alt="carrito"/>
                <Badge bg="dark">
                    <span>
                        {total !== 0 ? total : ''}
                    </span>
                </Badge>
                
            </NavLink>
        </div>
    )
}