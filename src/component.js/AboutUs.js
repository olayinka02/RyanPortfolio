import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
 import abouturban from './images/abouturban.svg';


class AboutUs extends Component {

    render() {
        return (
            <div>
                <Container className='SecondContainer'>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="AboutUsImagex1" >
                                <center>
                                    <img
                                        className="img-fluid abouturbanImage"
                                        src={abouturban}
                                        alt="abouturbanImage"
                                    />
                                </center>
                            </div>

                            <div className="AboutUsTextx2">
                                <h1 className="FirstSectionLeftHeading">
                                    About Us
                                </h1>
                                <p className="FirstSectionLeftParagraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Venenatis, amet, nunc tincidunt eget feugiat.
                                    Ipsum fringilla mauris eget dolor, sit sed vitae
                                    vestibulum amet. Montes, semper donec hendrerit volutpat
                                    diam est turpis massa molestie.
                                </p>
                            </div>

                           
                        </Col><br/><br/>

                        <Col xs={12} md={6}>
                            <div className="AboutUsTextx1">
                                <h1 className="FirstSectionLeftHeading">
                                    About Us
                                </h1>
                                <p className="FirstSectionLeftParagraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Venenatis, amet, nunc tincidunt eget feugiat.
                                    Ipsum fringilla mauris eget dolor, sit sed vitae
                                    vestibulum amet. Montes, semper donec hendrerit volutpat
                                    diam est turpis massa molestie.
                                </p>
                            </div>

                            <div className="AboutUsImagex2" >
                                <center>
                                    <img
                                        className="img-fluid abouturbanImage"
                                        src={abouturban}
                                        alt="abouturbanImage"
                                    />
                                </center>
                            </div>

                           
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default AboutUs;