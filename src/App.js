import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import NavBodyx from './component.js/NavBodyx';
import FirstSectionLeft from './component.js/FirstSectionLeft';
import ImageLeft from './component.js/ImageLeft';
import AboutUs from './component.js/AboutUs';


class App extends Component {
  render() {

    return (
      <div classname="BodySection">
        {/* Navbar */}
        <NavBodyx />

        {/* first container*/}
        <Container className='FirstContainer'>
          <Row>
            <Col xs={12} md={6}>
              <FirstSectionLeft />
            </Col>
            <Col xs={12} md={6}>
              <center>
               <ImageLeft />
              </center>
            </Col>
          </Row>
        </Container>

        {/* About Us Section */}
        <AboutUs /> 
      </div>
    );
  }
}

export default App;


