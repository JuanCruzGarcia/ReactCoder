import React, {useEffect, useState} from "react"
import Loading from "../Loading/Loading"
import ItemList from "../ItemList/ItemList"
import data from './../../data/products.json'
import {useParams} from "react-router-dom"

export default function ItemListContainer ({greeting}) {
    const {categoryName} = useParams()
    const [productos, setProductos] = useState([])

    useEffect( ()=> {
        
        const products = new Promise( resolve => {
            setTimeout(() => resolve(data), 2000)
        })
        products.then(res => {
            const misProductos = (categoryName) ?  
                res.filter(item => item.category === categoryName) : res
            
            setProductos(misProductos)         
        })

        products.catch((err) =>{
            setProductos(err)
        })
        
    }, [categoryName])

    return(
        <div>
            {
                (productos.length > 0) ? 
                    <>
                        <p className='greeting'>{greeting}</p>
                        <ItemList products={productos} />
                    </>
                :
                    <Loading />
            }
        </div>
    )
}
