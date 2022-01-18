import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting, arrayProductos, inicial}) => {

    

    return (
        <>
            <h2> {greeting} </h2>
            {arrayProductos.map(item => <ItemCount stock={item.stock} nombre={item.nombre} inicial={inicial} />)}
        </>
    )
}

export default ItemListContainer