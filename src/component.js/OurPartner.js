import React, { Component } from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import urbanx from './images/urbanx.svg';






class OurPartner extends Component {

    render() {
        return (
            <div>
                <center>
                    <h3>Our Partner</h3>
                </center>
                <Carousel controls={false} touch={true} pause="hover">
                    <Carousel.Item className="CarouselItemOne" interval={5000}>
                        <Container>
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
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="CarouselItemTwo" interval={5000}>
                    <Container>
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
                        </Container>
                    </Carousel.Item>
                   
                </Carousel>
            </div>
        )
    }
};

export default OurPartner;