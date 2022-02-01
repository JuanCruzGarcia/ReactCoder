import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import data from './../../data/products.json'
import { useParams } from 'react-router';

export default function ItemDetailContainer() {

const {itemId} = useParams()
const [producto, setProducto] = useState([]);

useEffect(() =>{

    const getItem = new Promise ((resolve) => {
    
        setTimeout(() => {
            let miProducto = data.find(item => item.id === itemId)
            resolve (miProducto)
        }, 2000)
    });

    getItem.then((res) => {
        setProducto(res)
    })

    getItem.catch((err) =>{
        setProducto(err)
    })

}, [itemId])

return (
    <div>
        {
            (producto.id) ?
            
            <ItemDetail item={producto}/>
            :
            <Loading />
        }
        
    </div>
);
};
