import React from 'react';
import Header from './Header';
import { Row, Container, Col } from 'react-bootstrap';
import heroimg from '../images/hero-comp.png';
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const Projects = () => {
  const bounceAnimation = keyframes`${bounceIn}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  // const heading = document.querySelector('')

  return (
    <>
      <Header/>
      <Container className='pt-5 heading'>
        <Row>
          <div style={{textAlign: 'center'}}>
            <h2 className="section-heading display-4">Projects</h2>
            <h3 className="section-subheading">From small to big projects, we got it!</h3>
          </div>
        </Row>
        <BouncyDiv>
          <Row>
            <Col md={4} className='portfolio-item'>
              <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal" onClick={(e) => console.log(e.target)}>
                <div className="portfolio-hover">
                  <div className='portfolio-hover-content'>
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img src={heroimg} className='img-responsive' />
              </a>
              <div className="portfolio-caption">
                <h4>Facebook</h4>
                <p>Web Development</p>
              </div>
            </Col>
            <Col md={4} className='portfolio-item'>
              <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                  <div className='portfolio-hover-content'>
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img src={heroimg} className='img-responsive' />
              </a>
              <div className="portfolio-caption">
                <h4>Facebook</h4>
                <p>Web Development</p>
              </div>
            </Col>
            <Col md={4} className='portfolio-item'>
              <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                  <div className='portfolio-hover-content'>
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img src={heroimg} className='img-responsive' />
              </a>
              <div className="portfolio-caption">
                <h4>Facebook</h4>
                <p>Web Development</p>
              </div>
            </Col>
            <Col md={4} className='portfolio-item'>
              <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                  <div className='portfolio-hover-content'>
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img src={heroimg} className='img-responsive' />
              </a>
              <div className="portfolio-caption">
                <h4>Facebook</h4>
                <p>Web Development</p>
              </div>
            </Col>
            <Col md={4} className='portfolio-item'>
              <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                  <div className='portfolio-hover-content'>
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img src={heroimg} className='img-responsive' />
              </a>
              <div className="portfolio-caption">
                <h4>Facebook</h4>
                <p>Web Development</p>
              </div>
            </Col>
            <Col md={4} className='portfolio-item'>
              <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                  <div className='portfolio-hover-content'>
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img src={heroimg} className='img-responsive' />
              </a>
              <div className="portfolio-caption">
                <h4>Facebook</h4>
                <p>Web Development</p>
              </div>
            </Col>
          </Row>
        </BouncyDiv>
      </Container>

      {/* <section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Portfolio</h2>
                    <h3 class="section-subheading text-muted">From small to big projects, we got it!</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/projects/fb.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Facebook</h4>
                        <p class="text-muted">Web Development</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/projects/kg.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Kupzz Gaming</h4>
                        <p class="text-muted">Graphic Design</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/projects/cb.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Corporate Branding</h4>
                        <p class="text-muted">Graphic Design</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/projects/seo.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Search Engine Optimization</h4>
                        <p class="text-muted">SEO</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/projects/az.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Amazon</h4>
                        <p class="text-muted">Web Development</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/projects/wp.jpg" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Wordpress  Site</h4>
                        <p class="text-muted">Web Development</p>
                    </div>
                </div>
            </div>
        </div>
      </section> */}
    </>
  )
}

export default Projects