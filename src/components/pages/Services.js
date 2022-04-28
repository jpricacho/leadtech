import React, { useState } from 'react';
import Header from './Header';
import { Tabs, Tab, Container, Row, Col, Badge, Button, Stack } from 'react-bootstrap';
import heroimg from '../images/hero-comp.png';
import webGif from '../images/responsive-web-design.gif';
import uiGif from '../images/ui-ux-design.gif';
import seoGif from '../images/seo.gif';

const TabCont1 = () => {
  return (
    <Row>
      <Col lg={true}>
        <img src={webGif} style={{borderRadius: '30px'}}/>
      </Col>
      <Col lg={true}>
        <div className='d-flex flex-column gap-5'>
          <span style={{color: 'white'}} className='h3'>It's More Than Web Design A website that's all about your brand We'll work with you to produce the best web design that reflects your brand's personality and business objectives.<br /><Badge bg='info'><span className='h2'>On track. On budget.</span></Badge></span>
          <Button variant="outline-warning" size="lg">
              Ask for quoutation
          </Button>
        </div>
      </Col> 
    </Row>
  )
}

const TabCont2 = () => {
  return (
    <Row>
      <Col lg={true}>
        <img src={uiGif} style={{borderRadius: '30px'}}/>
      </Col>
      <Col lg={true}>
        <div className='d-flex flex-column gap-5'>
          <span style={{color: 'white'}} className='h3'>It's More Than Web Design A website that's all about your brand We'll work with you to produce the best web design that reflects your brand's personality and business objectives.<br /><Badge bg='info'><span className='h2'>On track. On budget.</span></Badge></span>
          <Button variant="outline-warning" size="lg">
              Ask for quoutation
          </Button>
        </div>
      </Col> 
    </Row>
  )
}

const TabCont3 = () => {
  return (
    <Row>
      <Col lg={true}>
        <img src={seoGif} style={{borderRadius: '30px'}}/>
      </Col>
      <Col lg={true}>
        <div className='d-flex flex-column gap-5'>
          <span style={{color: 'white'}} className='h3'>It's More Than Web Design A website that's all about your brand We'll work with you to produce the best web design that reflects your brand's personality and business objectives.<br /><Badge bg='info'><span className='h2'>On track. On budget.</span></Badge></span>
          <Button variant="outline-warning" size="lg">
              Ask for quoutation
          </Button>
        </div>
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
          className="mb-3"
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