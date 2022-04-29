import React, { useState } from 'react';
import Header from './Header';
import { Tabs, Tab, Container, Row, Col, Badge, Button, Stack } from 'react-bootstrap';
import heroimg from '../images/hero-comp.png';
import webGif from '../images/responsive-web-design.gif';
import uiGif from '../images/ui-ux-design.gif';
import seoGif from '../images/seo.gif';
import { bounceInLeft, bounceInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounceInLeft}`;
const bounceAnimation2 = keyframes`${bounceInRight}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const BouncyDiv2 = styled.div`
  animation: 1s ${bounceAnimation2};
`;

const TabCont1 = () => {
  return (
    <Row>
      <Col lg={true} className='mb-5'>
        <BouncyDiv>
          <img src={webGif} style={{borderRadius: '30px'}}/>
        </BouncyDiv>
      </Col>
      <Col lg={true}>
        <BouncyDiv2>
          <div className='d-flex flex-column gap-5'>
            <span style={{color: 'white'}} className='h3'>Lead Tech ensures to deliver custom web development services. We are adept at designing and building reponsive, fast-loading, and user-friendly websites that offer a consistent look and use across different web browsers<br /><Badge bg='info'><span className='h2'>On track. On budget.</span></Badge></span>
            <Button variant="outline-warning" size="lg">
                Ask for quoutation
            </Button>
          </div>
        </BouncyDiv2>
      </Col> 
    </Row>
  )
}

const TabCont2 = () => {
  return (
    <Row>
      <Col lg={true} className='mb-5'>
        <BouncyDiv>
          <img src={uiGif} style={{borderRadius: '30px'}}/>
        </BouncyDiv>
      </Col>
      <Col lg={true}>
      <BouncyDiv2>
          <div className='d-flex flex-column gap-5'>
            <span style={{color: 'white'}} className='h3'>Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Lead Tech's UI/UX services. Our designers outline a UI/UX strategy that is adaptable to desktops, various mobile interfaces and platforms, screen sizes and operating systems<br /><Badge bg='info'><span className='h2'>On track. On budget.</span></Badge></span>
            <Button variant="outline-warning" size="lg">
                Ask for quoutation
            </Button>
          </div>
        </BouncyDiv2>
      </Col> 
    </Row>
  )
}

const TabCont3 = () => {
  return (
    <Row>
      <Col lg={true} className='mb-5'>
        <BouncyDiv>
          <img src={seoGif} style={{borderRadius: '30px'}}/>
        </BouncyDiv>
      </Col>
      <Col lg={true}>
        <BouncyDiv2>
          <div className='d-flex flex-column gap-5'>
            <span style={{color: 'white'}} className='h3'>Our major aim is to increase your brand's visibility online and optimizing your site in such a way that it stays on top of the Google search results. We are focused on the overall development of your marketing strategies so you enjoy business success.<br /><Badge bg='info'><span className='h2'>On track. On budget.</span></Badge></span>
            <Button variant="outline-warning" size="lg" className='align-bottom'>
                Ask for quoutation
            </Button>
          </div>
        </BouncyDiv2>
      </Col> 
    </Row>
  )
}

const Services = () => {
  const [key, setKey] = useState('web-design');
  return (
    <>
      <Header/>
      <Container className='p-5'>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 nav-justified"
          variant='pills'
        >
          <Tab eventKey="web-design" title="Web Design">
            <TabCont1 />
          </Tab>
          <Tab eventKey="ui-ux" title="UI / UX Design">
            <TabCont2 />
          </Tab>
          <Tab eventKey="digital-marketing" title="Digital Marketing">
            <TabCont3 />
          </Tab>
        </Tabs>
      </Container>


    </>
  )
}

export default Services