import React, { useContext, useState, useEffect, useRef } from "react";
import { context } from "../../context/CartProvider";
import { getFirestore } from "../../Firebase/Firebase"
import firebase from "firebase";
import { Button, FloatingLabel, FormControl } from "react-bootstrap";
import './Form.css';


export default function Form() {

    const { cart, totalPrice, cleanCart } = useContext(context)

    const [totalCompra, setTotalCompra] = useState(0)
    const [ordenId, setOrdenId] = useState("")
    const [compraTerminada, setCompraTerminada] = useState(true)

    const nombreRef = useRef();
    const direccionRef = useRef();
    const localidadRef = useRef();
    const emailRef = useRef();
    const telefonoRef = useRef();


    useEffect(() => {
        setTotalCompra(totalPrice())
    }, [cart])

    function graciasPorSuCompra() {
        setCompraTerminada(false)
    }

    function finalizarCompra() {

        const db = getFirestore();
        const ordenesDeCompra = db.collection("ordenes")

        const nuevaOrdenDeCompra = {
            comprador: {
                nombre: nombreRef.current.value,
                dirección: direccionRef.current.value,
                localidad: localidadRef.current.value,
                email: emailRef.current.value,
                telefono: telefonoRef.current.value
            },
            items: cart,
            total: totalCompra,
            fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }

        ordenesDeCompra.add(nuevaOrdenDeCompra)
            .then(({ id }) => {
                console.log("Orden: " + id)
                setOrdenId(id)
            })
            .catch((err) => {
                console.log(err)
            })
        cleanCart()
        graciasPorSuCompra()

    }

    return (

        <>
            {compraTerminada ?
                <div>
                    <h3>Ingrese sus datos</h3><hr></hr>
                    <FloatingLabel controlId="floatingInput" label="Nombre y Apellido" className="mb-4">
                        <FormControl type="text" placeholder="Ingrese su nombre y apellido" name="nombre" ref={nombreRef}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Direccion" className="mb-4">
                        <FormControl type="text" placeholder="Ingrese su domicilio" name="direccion" ref={direccionRef}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Localidad" className="mb-4">
                        <FormControl type="text" placeholder="Ingrese su localidad" name="localidad" ref={localidadRef}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-4">
                        <FormControl type="email" placeholder="name@example.com" name="direccion de email" ref={emailRef}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Telefono" className="mb-4">
                        <FormControl type="tel" placeholder="Ingrese numero de telefono" name="número de teléfono"  ref={telefonoRef}/>
                    </FloatingLabel>
                    
                    <br />
                    <Button onClick={() => finalizarCompra()}> Finalizar Compra </Button>
                    
                </div>
                :
                    <div className="code"> 
                        <h2>Su código de compra es: </h2>
                        <br />
                        <p>{ordenId}</p>                        
                    </div>
                
            }

        </>
    )
} 