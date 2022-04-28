import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../styles/Header.css'
import logo from '../images/logo.png'
import { Navbar, Nav, Container, Offcanvas, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';



const Header = () => {
    return (
        <Navbar expand="sm" variant='dark'>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="200"
                        height="70"
                        className="d-inline-block align-top"
                        alt="leadtech logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ background: 'radial-gradient(circle, rgba(21,9,78,1) 0%, rgba(3,23,65,1) 88%)' }}>
                        <Nav className="d-flex justify-content-end flex-grow-1 pe-3">
                            <Nav.Link eventKey={1} href="/">
                                <span className='h3 navlink'>Home</span>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/about">
                                <span className='h3 navlink' >About</span>
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="/services">
                                <span className='h3 navlink'>Services</span>
                            </Nav.Link>
                            <Nav.Link eventKey={4} href="/projects">
                                <span className='h3 navlink'>Projects</span>
                            </Nav.Link>
                            <Nav.Link eventKey={5} href="/contact">
                                <span className='h3 navlink'>Contact</span>
                            </Nav.Link>
                            <Nav.Link eventKey={6} href="/developers">
                                <span className='h3 navlink'>Developers</span>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )


};

export default Header;