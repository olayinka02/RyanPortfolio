import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Icon } from '@iconify/react';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            className="modalme"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="modal-content">
            <div className="modalbodyx">
                <Modal.Header >

                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="modaltitle"> Beta <br /> Programme </h1>
                    </Modal.Title>
                    <Icon className="cancelBtn" onClick={props.onHide} icon="ic:outline-cancel" color="white" height="34" />
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail"><br />
                            <Form.Control className="forminputmodal" type="email" placeholder=" Your e-mail" /><br />
                            <Form.Control className="forminputmodal" type="email" placeholder=" Type your message here" />
                        </Form.Group>
                        <Button className="formsubmitmodal" >Send</Button>
                    </Form>


                </Modal.Body>
            </div>
            </div>


        </Modal>
    );
}

function Appx() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button onClick={() => setModalShow(true)} className="SeeMoreBtnx" variant="outline-light">
                <div className="SeeMoreBtnInnerx">
                    Beta Sign Up
                </div>
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default Appx;

