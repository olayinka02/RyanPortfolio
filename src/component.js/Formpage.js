import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
                                <Col xs={12} md={10}>
                                    <h3 className="Formtopicname">Got an idea you want to bring to life</h3>
                                </Col>
                                <Col xs={12} md={2}>
                                    <center>
                                    <img
                                        className="img-fluid questionmarktext"
                                        src={qu}
                                        alt="questionmarktext"
                                    />
                                    </center>
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
                                    <Form.Group className="mb-3" controlId="formBasicEmail"><br/>
                                        <Form.Control className="forminput" type="email" placeholder="       Your e-mail" /><br/>
                                        <Form.Control className="forminput" type="email" placeholder="      Type your message here" />
                                    </Form.Group>
                                    <Button className="formsubmit" variant="outline-light">Send</Button>
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