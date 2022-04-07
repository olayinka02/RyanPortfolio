import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import firstblog from './images/firstblog.jpg';
import secondblog from './images/secondblog.jpg';
import thirdblog from './images/thirdblog.jpg';





class Blogpage extends Component {

    render() {
        return (
            <div>
                <Container className="BlogContainer">
                    <Row>
                        <Col xs={6} md={6}><h3 style={{ color: 'white' }}>Word on the Urban Street</h3></Col>
                        <Col xs={6} md={6}><p style={{ float: 'right', color: 'white' }}>view blog</p></Col>
                    </Row><br/>
                    <Row>
                        <Col xs={12} md={4}>
                            <Card className="card">
                                <Card.Img variant="top" className="cardimage" src={firstblog} />
                                <Card.Body className="cardbody">
                                    <Card.Title className="cardtitle">UrbanDev Partners with Phenomenal</Card.Title>
                                    <Card.Text className="cardtext">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, 
                                    amet, nunc tincidunt eget feugiat. Ipsum fringilla mauris eget dolor, 
                                    sit sed vitae vestibulum amet.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                        <Card className="card">
                                <Card.Img variant="top" className="cardimage" src={secondblog} />
                                <Card.Body className="cardbody">
                                    <Card.Title className="cardtitle">UrbanDev Partners with Phenomenal</Card.Title>
                                    <Card.Text className="cardtext">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, 
                                    amet, nunc tincidunt eget feugiat. Ipsum fringilla mauris eget dolor, 
                                    sit sed vitae vestibulum amet.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                        <Card className="card">
                                <Card.Img variant="top" className="cardimage" src={thirdblog} />
                                <Card.Body className="cardbody">
                                    <Card.Title className="cardtitle">UrbanDev Partners with Phenomenal</Card.Title>
                                    <Card.Text className="cardtext">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, 
                                    amet, nunc tincidunt eget feugiat. Ipsum fringilla mauris eget dolor, 
                                    sit sed vitae vestibulum amet.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Blogpage;