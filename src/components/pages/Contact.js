import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Row, Container, Col, Form } from 'react-bootstrap';
import '../styles/Contact.css';
import Header from './Header';

const Contact = () => {
    return (

        <div className='contactbg'>
            <>
                <Header />
                <Container className='container'>
                    <h1>Contact Us</h1>
                    <Row className='contactus'>
                        <Col sm={6} className=''>
                            <div className='otherinfo'>
                                <h1>Don't be a stranger just say hello!</h1>
                                <p>Thank you for your interest in our services. Please fill out the form below and we will get back to you promptly regarding your request</p>
                                <div className='socials'>
                                    <ul>
                                        <li><FacebookIcon  className='icons'/>facebook.com/leadtech</li>
                                        <li><InstagramIcon className='icons' />instagram.com/leadtech</li>
                                        <li><CallIcon  className='icons'/>+1 4565 6784</li>
                                        <li><MailIcon  className='icons'/>leadtech1@gmail.com</li>
                                        <li><LocationOnIcon  className='icons'/>869 D'Amore Trafficway Suite 665, Philippines</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} className='text-white form mt-2'>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <input type='submit' value='Send' className='submit' />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        </div>
    )
}

export default Contact