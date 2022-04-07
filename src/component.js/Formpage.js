import React, { Component } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';

import qu from './images/qu.svg';
import hmm from './images/hmmm.svg';




class Formpage extends Component {

    render() {
        return (
            <div className="Formbody">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <Row className="formtextleft">
                                <Col xs={10} md={9}>
                                    <h3 className="Formtopicname">Got an idea you want to bring to life</h3>
                                </Col>
                                <Col xs={2} md={3}>
                                    <img
                                        className="img-fluid questionmarktext"
                                        src={qu}
                                        alt="questionmarktext"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <center><br /><br />
                                <img
                                    className="img-fluid hmmm"
                                    src={hmm}
                                    alt="hmmm"
                                /><br />
                                <Form className="formbody">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Form>

                                    </center>
                                </Col>

                            </Row>

                        </Container>
                    </div>
                    )
    }
};

                    export default Formpage;