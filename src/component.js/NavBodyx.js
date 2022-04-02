import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Sling as Hamburger } from 'hamburger-react';

import  Urbandevlogo  from './images/Urbandevlogo.svg';
import HomeIcon from './images/HomeIcon.svg';
import AboutUsIcon from './images/AboutUsIcon.svg';
import projects from './images/projects.svg';
import MeettheTeamIcon from './images/MeettheTeamIcon.svg';



class NavBodyx extends Component {

    render() {
        return (
            <div>
                <Navbar fixed="top"  expand="lg" className="NavBarBody">
                    <Container>
                        <Navbar.Brand href="#home">
                        <img
                            src={Urbandevlogo}
                            width="165"
                            height="55"
                            className="d-inline-block align-top"
                            alt="Urbandevlogo"
                        />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"whitesmoke",}} >
                            <Hamburger duration={0.8}  hideOutline={false} />
                        </Navbar.Toggle>

                        <Navbar.Collapse id="basic-navbar-nav" className="navChildrenWrap">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className="navChildren">
                                  <img src={HomeIcon} width="20" height="20" alt="iconimgone"/> Home
                                </Nav.Link>

                                <Nav.Link href="#link" className="navChildren">
                                  <img src={projects} width="20" height="20" alt="iconimgtwo"/> Projects
                                </Nav.Link>

                                <Nav.Link href="#link" className="navChildren">
                                  <img src={AboutUsIcon} width="20" height="20" alt="iconimgthree"/> About Us
                                </Nav.Link>
                                
                                <Nav.Link href="#link" className="navChildren">
                                  <img src={MeettheTeamIcon} width="20" height="20" alt="iconimgfour"/> Meet the team
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default NavBodyx;
