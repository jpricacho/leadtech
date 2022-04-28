import React, { useState } from 'react';
import '../styles/Section.css';
import { Row, Container, Col } from 'react-bootstrap';
import heroimg from '../images/hero-comp.png';
import heroimg2 from '../images/hero-ui.png';
import heroimg3 from '../images/hero-seo.png';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Section = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null}>
            <Carousel.Item>
                <div className='hero'>
                    <div className='hero-body'>
                        <Container>
                            <Row>
                                <Col sm={4} className='d-flex flex-column justify-content-evenly align-items-center mb-5'>
                                    <div className='d-flex flex-column gap-3 align-items-center'>
                                        <div>
                                            <span className='display-3 hero-head'>WEB DESIGN</span>
                                        </div>
                                        <div>
                                            <span className='h2 hero-cap'>We bring ideas to life.<br />Responsive. Creative. Modern.</span>
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <Button href='/services' variant="outline-info" style={{fontWeight: 700}}>View Services</Button>
                                            <Button href='/contact' variant="outline-info" style={{fontWeight: 700}}>Contact Us</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <img src={heroimg} alt='web design service'/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='hero'>
                    <div className='hero-body'>
                        <Container>
                            <Row>
                                <Col sm={4} className='d-flex flex-column justify-content-evenly align-items-center mb-5'>
                                    <div className='d-flex flex-column gap-3 align-items-center'>
                                        <div>
                                            <span className='display-2 hero-head2'>UI / UX</span>
                                        </div>
                                        <div>
                                            <span className='h2 hero-cap'>Seamless design.<br />Big or small projects.</span>
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <Button href='/services' variant="outline-info" style={{fontWeight: 700}}>View Services</Button>
                                            <Button href='/contact' variant="outline-info" style={{fontWeight: 700}}>Contact Us</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <img src={heroimg2} alt='ui ux service'/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='hero'>
                    <div className='hero-body'>
                        <Container>
                            <Row>
                                <Col sm={4} className='d-flex flex-column justify-content-evenly align-items-center mb-5'>
                                    <div className='d-flex flex-column gap-3 align-items-center'>
                                        <div>
                                            <span className='display-3 hero-head'>DIGITAL MARKETING</span>
                                        </div>
                                        <div>
                                            <span className='h2 hero-cap'>Be on top of the page.<br />Be visible and be known.</span>
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <Button href='/services' variant="outline-info" style={{fontWeight: 700}}>View Services</Button>
                                            <Button href='/contact' variant="outline-info" style={{fontWeight: 700}}>Contact Us</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <img src={heroimg3} alt='ui ux service'/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>  
    )
};

export default Section;