import React from "react";
import { Col, Container, Row  } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './task4.css';
import 'bootstrap/dist/css/bootstrap.css'


function Task4(){
    return(
        <div className="n1">
            <Container>
                <Row>
                    <Col md={12} sm={12} lg={12}>
                        <center><h1 className="ab">Social Button</h1></center>
                            <div className="gh">
                                    <Container>
                                        <Row>
                                            <Col md={12} sm={12} lg={12}>
                                                <Button variant="warning" className="b1">Link</Button>{' '}
                                                <Button variant="" className="b2">comment</Button>{' '}
                                                <Button variant="primary" className="b3">Share</Button>{' '}
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                
                    </Col>
                </Row>
            </Container>
        </div>
                
             
        
           
        
    )
}
export default Task4