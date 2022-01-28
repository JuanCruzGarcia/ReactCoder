import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import data from './../../data/products.json'
import { useParams } from 'react-router';

export default function ItemDetailContainer() {

const {itemId} = useParams()

const traerProducto = async () =>{
    
    setTimeout(()=>{

        const miProducto = data.find(item => item.id === itemId)
        setProducto(miProducto)

    } , 2000)
}

const [producto, setProducto] = useState([])

useEffect( ()=> {
    traerProducto()
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
