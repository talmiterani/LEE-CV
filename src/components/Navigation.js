import React from 'react';
import {Nav,Navbar, Container } from "react-bootstrap"
import "./navigation.css"; 
const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect fixed='top' variant='dark'>
            <Nav.Item expand="lg">
                <p className="navItem">Lee Miterani</p>
            </Nav.Item>
            <Container >
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end" >
                        <Nav.Link href="/home" style={{color:"white"}}>Work</Nav.Link>
                        <Nav.Link href="/Academic" style={{color:"white"}}> Academic</Nav.Link>
                        <Nav.Link href="/About" style={{color:"white"}}>About</Nav.Link>
                        <Nav.Link href="/Contact" style={{color:"white"}}>Contact</Nav.Link>
                        <Nav.Link href="/Resume" style={{color:"white"}}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
};

export default Navigation;