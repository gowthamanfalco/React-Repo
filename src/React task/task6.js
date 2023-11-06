import React from "react";
import './task6.css';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";




function Task6() {
    return (
        <div className="ab">
            <div className="bd">
                <Container>
                    <Row>
                        <Col md={12} sm={12} lg={12}>
                            <h1 className="ns">MEMBER NAME</h1><br></br>
                            <input type="text" className="ip" placeholder="    E-Mail"></input><br></br><br></br>
                            <input type="password" className="ip" placeholder="  . . . . . . . "></input><br></br>
                            <Button variant="success" className="pi" > login</Button><br></br><br></br>
                            <label className="op">Forgot</label>
                            <a href="#" className="ln">  Username </a><a href="#" className="ln">  /Password ?</a>
                            <a href="#" className="lc">  create your account <FontAwesomeIcon icon={faArrowRight} style={{color: "#6dd336",}} /> </a>

                        </Col>
                    </Row>
                </Container>
                <div className="lk">
                    <Container>
                        <Row>
                            <Col md={12} sm={12} lg={12}>
                                <img src="https://image.freepik.com/free-vector/man-is-working-with-laptop_28923-38.jpg" className="lp" alt="img" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Task6