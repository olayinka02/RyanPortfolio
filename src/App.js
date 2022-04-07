import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import NavBodyx from './component.js/NavBodyx';
import FirstSectionLeft from './component.js/FirstSectionLeft';
import ImageLeft from './component.js/ImageLeft';
import AboutUs from './component.js/AboutUs';
import OurPartner from './component.js/OurPartner';

import LineSection from './component.js/LineSection';
import GamePage from './component.js/GamePage';
import BlogPage from './component.js/BlogPage';
import Formpage from './component.js/Formpage';


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

        <LineSection />



        {/* About Us Section */}
        <AboutUs /> 

        <LineSection />

        {/* our partner */}
        <OurPartner /><br/><br/>

        <LineSection /><br/>
         
          {/* our projects */}
        <GamePage /><br/><br/>

        <LineSection /><br/>
        
        {/* our blog */}
        <BlogPage />

        <LineSection /><br/>

        <Formpage />

        <LineSection /><br/>
      </div>
    );
  }
}

export default App;


