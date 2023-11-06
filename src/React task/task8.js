import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Task1 from "./task1";
import Task2 from "./task2";
import Task3 from "./task3";
import Task4 from "./task4";
import Task5 from "./task5";
import Task6 from "./task6";
import { Col, NavbarCollapse, Row } from "react-bootstrap";

function Task8() {
    return (
        <>
        <BrowserRouter>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">PROJECTS</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link}to={"/task1"}>TASK1</Nav.Link>
                            <Nav.Link as={Link}to={"/task2"}>TASK2</Nav.Link>
                            <Nav.Link as={Link}to={"/task3"}>TASK3</Nav.Link>
                            <Nav.Link as={Link}to={"/task4"}>TASK4</Nav.Link>
                            <Nav.Link as={Link}to={"/task5"}>TASK5</Nav.Link>
                            <Nav.Link as={Link}to={"/task6"}>TASK6</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                        <Routes>
                            <Route path="/task1" element={<Task1/>}></Route>
                            <Route path="/task2" element={<Task2/>}></Route>
                            <Route path="/task3" element={<Task3/>}></Route>
                            <Route path="/task4" element={<Task4/>}></Route>
                            <Route path="/task5" element={<Task5/>}></Route>
                            <Route path="/task6" element={<Task6/>}></Route>
                        </Routes>
                      
                
            </BrowserRouter>
               

            
            
        </>
    )
}
export default Task8