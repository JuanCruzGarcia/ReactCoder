import React, {useEffect, useState} from "react"
import Loading from "../Loading/Loading"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"
import { getFirestore } from "../../Firebase/Firebase"

export default function ItemListContainer ({greeting}) {
    const {categoryName} = useParams()
    const [products, setProducts] = useState([])

    useEffect( ()=> {

        const db = getFirestore()
            const productsCollection = db.collection('products')
            productsCollection.get()
            .then( (querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('No se han encontrnado productos')
                } else {
                    const products = querySnapshot.docs.map(doc=> {
                        return {id: doc.id, ...doc.data()}
                    })
                    const misProductos = (categoryName)   
                                            ? products.filter(item => item.category === categoryName) 
                                            : products
                    console.log(misProductos)
                    setProducts(misProductos)
                }
            } )
            .catch( err => console.log('Error busqueda producto: ' + err ) ) 

        
    }, [categoryName])

    return(
        <div>
            {
                (products.length > 0) ? 
                    <>
                        <ItemList products={products} />
                    </>
                :
                    <Loading />
            }
        </div>
    )
}
