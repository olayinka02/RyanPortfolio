import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react';

import Urbandevlogo from './images/Urbandevlogo.svg';
import HomeIcon from './images/HomeIcon.svg';
import AboutUsIcon from './images/AboutUsIcon.svg';
import projects from './images/projects.svg';
import MeettheTeamIcon from './images/MeettheTeamIcon.svg';



class NavBodyx extends Component {

    render() {
        return (
            <div>
                <Navbar fixed="top" expand="lg" className="NavBarBody">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="/" >
                            <img
                                src={Urbandevlogo}
                                width="165"
                                height="55"
                                className="d-inline-block align-top"
                                alt="Urbandevlogo"
                            />
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "whitesmoke", }} >
                            <Hamburger duration={0.8} hideOutline={false} />
                        </Navbar.Toggle>

                        <Navbar.Collapse className="justify-content-end navChildrenWrap">
                            <Nav>
                                <Nav.Link>
                                    <Link className="navChildren active" to="/">
                                        <img src={HomeIcon} width="20" height="20" alt="iconimgone" />  Home
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link className="navChildren" to="/project">
                                        <img src={projects} width="20" height="20" alt="iconimgtwo" />  Projects
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link className="navChildren" to="/about">
                                        <img src={AboutUsIcon} width="20" height="20" alt="iconimgthree" />  About Us
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link className="navChildren" to="/meet">
                                        <img src={MeettheTeamIcon} width="20" height="20" alt="iconimgfour" />  Meet the team
                                    </Link>
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
