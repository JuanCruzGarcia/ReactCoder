import React from "react";
import {Row, Col} from 'react-bootstrap'
import Local from "../../Imagenes/local.png"
import Telefono from "../../Imagenes/phone.png"
import Mail from "../../Imagenes/mail.png"
import Instagram from "../../Imagenes/instagram.png"

export default function Contacto(){
    return (
        <>
            <Row>
                <h1>Contacta con Nosotros</h1>
            </Row>
            <Row>
                <Col><img src={Local} alt="" /> <h5>Local</h5><p>Av. Juan B. Justo 1234</p> <p>(Mar del plata)</p></Col>
                <Col><img src={Telefono} alt="" /><h5>Telefono</h5><p>123456678</p></Col>
                <Col><img src={Mail} alt="" /><h5>Correo</h5><p>streetclothing@gmail.com</p></Col>
                <Col><img src={Instagram} alt=""/><h5>Instagram</h5><p>@streetclothing</p></Col>
            </Row>
       </>     
        
    )
}