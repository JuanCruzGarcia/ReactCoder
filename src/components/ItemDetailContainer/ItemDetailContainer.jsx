import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router';
import {getFirestore} from "../../Firebase/Firebase";

export default function ItemDetailContainer() {

const {itemId} = useParams()
const [products, setProducts] = useState([])

useEffect(() =>{
    const db = getFirestore();
    const itemList = db.collection("products")
    const producto = itemList.doc(itemId)
    
    producto.get()
    .then((doc) => {
        if(!doc.exists) {
            console.log("No existe el producto")
            return
        }

        setProducts({id: doc.id, ...doc.data()})
        
    })
    .catch((err) =>{
        console.log(err)
    })

}, [itemId])

return (
    <div>
        {
            (products.id) ?
            
            <ItemDetail item={products}/>
            :
            <Loading />
        }
        
    </div>
);
};
