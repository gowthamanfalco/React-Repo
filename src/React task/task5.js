import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell ,faCircleExclamation} from "@fortawesome/free-solid-svg-icons";


function Task5(){
    return(
        <div>
            <Container>
                <Row>
                    <Col md={12}sm={12}lg={12}>
                        <center><h1>NOTIFICATION</h1></center>
                    </Col>
                </Row>
            </Container>
            <div className="as">
                <Container>
                    <Row>
                        <Col md={12} sm={12} lg={12}>
                        <h1 className="bg-primary"><FontAwesomeIcon icon={faCircleCheck} />   INFORMATION MESSAGE</h1>{' '}<br></br><br></br>
                        <h1 className="bg-success"><FontAwesomeIcon icon={faCircleCheck} />   SUCCESS MESSAGE</h1>{' '}<br></br><br></br>
                        <h1 className="bg-warning"><FontAwesomeIcon icon={faBell} /> WARNING MESSAGE</h1>{' '}<br></br><br></br>
                        <h1 className="bg-danger"><FontAwesomeIcon icon={faCircleExclamation} />  ERROR MESSAGE </h1>{' '}<br></br><br></br>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
    
}
export default Task5