import React, { Component } from "react";
import { Container, Row, Col, } from "react-bootstrap";

import Appx from "./Modalbtn.js";





class GamePage extends Component {

    render() {
        return (
            <div>
                <Container>
                    <center>
                        <h1 className="ProductHeading">Products</h1><br />
                        <Row>
                            <Col xs={12} md={12}>
                             
                                 <iframe className="vdIframe"
                                    src="https://www.youtube.com/embed/oQUc_cfdPeQ?controls=0&amp;start=28"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}><br/>
                                <center>
                                    <p style={{color:'white',fontSize:"0.8rem", fontFamily:"poppins",}}>Sign up for our Beta testing program</p>
                                    {/* <Button className="SeeMoreBtnx" variant="outline-light">
                                        <div className="SeeMoreBtnInnerx">
                                            Beta Sign Up
                                        </div>
                                    </Button> */}

                                    <Appx />
                                </center>
                            </Col>
                        </Row>
                    </center>
                </Container>
            </div>
        )
    }
};

export default GamePage;