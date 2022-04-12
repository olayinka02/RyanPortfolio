import React, { Component } from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import urbanx from './images/urbanx.svg';






class OurPartner extends Component {

    render() {
        return (
            <div className="ThirdContainer">
                <center>
                    <h3 className="OurPartnerHeading">Our Partner</h3>
                </center><br/>
                <Container>
                <Carousel controls={false} touch={true} pause="hover">
                    <Carousel.Item className="CarouselItemOne" interval={5000}>
                        
                            <Row>
                                <Col xs={3} md={3}>
                                <center>
                                    <div className="circularPath">
                                        <center>
                                            <img
                                                className="img-fluid PartnerImage"
                                                src={urbanx}
                                                alt="urbanxImage"
                                            />
                                        </center>
                                    </div>
                                </center>
                                </Col>
            
                                <Col xs={3} md={3}>
                                <center>
                                <div className="circularPath">
                                        <center>
                                            <img
                                                className="img-fluid PartnerImage"
                                                src={urbanx}
                                                alt="urbanxImage"
                                            />
                                        </center>
                                    </div>
                                </center>
                                </Col>
                              
                                <Col xs={3} md={3}>
                                <center>
                                <div className="circularPath">
                                        <center>
                                            <img
                                                className="img-fluid PartnerImage"
                                                src={urbanx}
                                                alt="urbanxImage"
                                            />
                                        </center>
                                    </div>
                                    </center>
                                </Col>
                                <Col xs={3} md={3}>
                                <center>
                                <div className="circularPath">
                                        <center>
                                            <img
                                                className="img-fluid PartnerImage"
                                                src={urbanx}
                                                alt="urbanxImage"
                                            />
                                        </center>
                                    </div>
                                    </center>
                                </Col>
                            </Row>
                        
                    </Carousel.Item>
                    <Carousel.Item className="CarouselItemTwo" interval={5000}>
                    
                            <Row>
                                <Col xs={3} md={3}>
                                <center>
                                    <div className="circularPath">
                                        <center>
                                            <img
                                                className="img-fluid PartnerImage"
                                                src={urbanx}
                                                alt="urbanxImage"
                                            />
                                        </center>
                                    </div>
                                </center>
                                </Col >
            
                                <Col xs={3} md={3}>
                                <center>
                                <div className="circularPath">
                                        <center>
                                            <img
                                                className="img-fluid PartnerImage"
                                                src={urbanx}
                                                alt="urbanxImage"
                                            />
                                        </center>
                                    </div>
                                </center>
                                </Col>
                              
                                <Col xs={3} md={3}>
                                <center>
                                <div className="circularPath">
                                        <center>
                                            <img
                                                className="img-fluid PartnerImage"
                                                src={urbanx}
                                                alt="urbanxImage"
                                            />
                                        </center>
                                    </div>
                                    </center>
                                </Col>
                                <Col xs={3} md={3}>
                                <center>
                                <div className="circularPath">
                                        <center>
                                            <img
                                                className="img-fluid PartnerImage"
                                                src={urbanx}
                                                alt="urbanxImage"
                                            />
                                        </center>
                                    </div>
                                    </center>
                                </Col>
                            </Row>
            
                    </Carousel.Item>
                   
                </Carousel>
                </Container>
            </div>
        )
    }
};

export default OurPartner;