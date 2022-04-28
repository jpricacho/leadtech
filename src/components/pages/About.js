import React from 'react';
import Header from './Header';
import { Row, Container, Col } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';
import htmlLogo from '../images/html-black.png';
import cssLogo from '../images/css-black.png';
import jsLogo from '../images/java-script.png';

// import '../styles/About.css'

const About = () => {
  const bounceAnimation = keyframes`${flipInX}`;

  const BouncyDiv = styled.div`
    animation: 5s ${bounceAnimation};
  `;

  return (
    <>
        <Header/>
        <Container className='mt-4'>
          <Row className='about-div'>
            <Col sm={6} className=''>
              <div style={{color: 'white'}}>
                <span className='display-4'>About Us</span>
                <div className='h4 mt-3'>
                  <span>We are LeadTech, an innovations company that creates simplified solutions thru customized UI/UX and website. We work with enterprises, startups and organizations to scale and make impact on their goals and together, build a smarter and sustainable world.</span>
                </div>
              </div>
              <div style={{color: 'white'}} className='mt-5'>
                <span className='display-4'>What we do?</span>
                <div className='h4 mt-3'>
                  <span>We create modern and efficient technology solutions for enterprises, startups and organizations to scale and make impact on their goals.</span>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <Row>
                <div style={{color: 'white'}}>
                  <div className='display-4'>
                    <span>Our Core Technolgy</span>
                  </div>
                  <div className='h4 mt-3'>
                    <span>We create modern and efficient technology solutions for enterprises, startups and organizations to scale and make impact on their goals.</span>
                  </div>
                </div>
              </Row>
              <Row>
                <Col xs={true} className='p-5 tech-logo'>
                  <BouncyDiv>
                    <img src={htmlLogo} className='techLogos'/>
                  </BouncyDiv>
                  <div style={{textAlign: 'center'}} className='mt-2'>
                    <span style={{fontFamily: 'Righteous'}}>HTML</span>
                  </div>
                </Col>
                <Col xs={true} className='p-5 tech-logo'>
                  <BouncyDiv>
                    <img src={cssLogo}/>
                  </BouncyDiv>
                  <div style={{textAlign: 'center'}} className='mt-2'>
                    <span style={{fontFamily: 'Righteous'}}>CSS</span>
                  </div>
                </Col>
                <Col xs={true} className='p-5 tech-logo'>
                  <BouncyDiv>
                    <img src={jsLogo}/>
                  </BouncyDiv>
                  <div style={{textAlign: 'center'}} className='mt-2'>
                    <span style={{fontFamily: 'Righteous'}}>Javascript</span>
                  </div>
                </Col>
              </Row>

            </Col>
          </Row>
          <Row>
            <div style={{color: 'white', textAlign: 'center'}}>
              <span className='display-4'>Who trust us?</span>
            </div>
            <Container>
              <section class="logo-carousel slider" data-arrows="true">
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image1.png"/></div>
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"/></div>
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"/></div>
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"/></div>
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png"/></div>
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"/></div>
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image7.png"/></div>
                <div class="slide"><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"/></div>
              </section>
            </Container>
          </Row>
        </Container>
    </>
  )
}

export default About