import React from "react"
import { Col,Row} from "react-bootstrap";
import './Footer.css'
import github from "../../Imagenes/github.png"
import linkedin from "../../Imagenes/linkedin.png"
import logoFooter from "../../Imagenes/SC.png"
import Local from "../../Imagenes/local.png"
import Telefono from "../../Imagenes/phone.png"
import Instagram from "../../Imagenes/instagram.png"



export default function Footer(){


    return (
        <>
        <div className="footer">
            <Row className="footer">
                <Col><img src={logoFooter} alt="" style={{width:'18rem'}}/></Col> 
                <Col>
                    <p>Av. Juan B. Justo 1234 (Mar del plata)</p>
                    <p>123456678</p>
                    <p>@streetclothing</p>
                </Col>
            </Row> 
            <Row className="footer">
                <hr/>           
                <Col></Col>
                <Col className="footerP"><p>©2022 Copyright: Garcia Juan Cruz</p></Col>
                <Col><a href="https://github.com/JuanCruzGarcia"><img src={github} alt=""/></a> <a href="https://www.linkedin.com/in/juancruzgarcia-/"><img src={linkedin} alt=""/></a> </Col>
            </Row>
        </div>

        </>
    )
}