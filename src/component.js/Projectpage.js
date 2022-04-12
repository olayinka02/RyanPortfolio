import React, { Component } from "react";
import NavBodyx from "./NavBodyx";
import { Container, Row, Col, Button } from 'react-bootstrap';

import Projectlandingimage from "./images/Projectlandingimage.svg";
import LineSection from "./LineSection.js";

import BottomNav from "./BottomNav";
import Formpage from "./Formpage";





class Projectpage extends Component {

    render() {
        return (
            <div classname="BodySection">
                {/* Navbar */}
                <NavBodyx />
                <br/><br/><br/>

                <Container>
                    <img
                        src={Projectlandingimage}
                        width="100%"
                        className="d-inline-block align-top"
                        alt="Projectlandingimage"
                    />
                </Container><br />
                <LineSection /><br />

                <Container className="productsectiontwo">
                    <Row>
                        <Col xs={12} md={7}>
                            <div>
                                <img
                                    src={Projectlandingimage}
                                    width="100%"
                                    className="d-inline-block align-top"
                                    alt="Projectlandingimage"
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={5}>
                            <div>
                                <p className="producttext">
                                    UrbanDev Studio is blends the art of fun and professionalism to
                                    create outstanding virtual reality and game applications. We also
                                    do not believe in being rigid, as a comapny and a team, we are open
                                    to new and fresh ideas to bring those crazy ideas to fruition. No
                                    matter how crazy it gets. We believe in POSSIBILITY and
                                    PROFESSIONALISM and SIMPLICITY at its peak.
                                </p><br />
                                <Button className="SeeMoreBtnxx" variant="outline-light">
                                    <div className="SeeMoreBtnInnerxx">
                                        View
                                    </div>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container><br />


                <Container className="productsectiontwo">
                    <Row>
                        <Col xs={12} md={7}>
                            <div>
                                <img
                                    src={Projectlandingimage}
                                    width="100%"
                                    className="d-inline-block align-top"
                                    alt="Projectlandingimage"
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={5}>
                            <div>
                                <p className="producttext">
                                    UrbanDev Studio is blends the art of fun and professionalism to
                                    create outstanding virtual reality and game applications. We also
                                    do not believe in being rigid, as a comapny and a team, we are open
                                    to new and fresh ideas to bring those crazy ideas to fruition. No
                                    matter how crazy it gets. We believe in POSSIBILITY and
                                    PROFESSIONALISM and SIMPLICITY at its peak.
                                </p><br />
                                <Button className="SeeMoreBtnxx" variant="outline-light">
                                    <div className="SeeMoreBtnInnerxx">
                                        View
                                    </div>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container><br/>

                <Container>
                    <img
                        src={Projectlandingimage}
                        width="100%"
                        className="d-inline-block align-top"
                        alt="Projectlandingimage"
                    />
                </Container><br /><br/><br/>

                <Formpage /><br />

                <BottomNav />


            </div>
        )
    }
};

export default Projectpage;