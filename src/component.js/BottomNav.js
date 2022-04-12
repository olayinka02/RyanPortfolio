import React, { Component } from "react";
import { Container } from 'react-bootstrap';

import { Icon } from '@iconify/react';





class BottomNav extends Component {

    render() {
        return (
            <div>
                <Container>
                    <center>
                        <div>
                            <Icon style={{paddingRight:"0.5rem", paddingLeft:"0.5rem"}} icon="bxl:facebook-square" color="#1400ff" height="50" />
                            <Icon style={{paddingRight:"0.5rem", paddingLeft:"0.5rem"}} icon="bi:twitter" color="#55acee" height="50" />
                            <Icon style={{paddingRight:"0.5rem", paddingLeft:"0.5rem"}} icon="fa-brands:instagram-square" color="#ff00d6" height="50" />
                        </div>
                        <p style={{color:'white'}}>Copyright 2021 | UrbanDev</p>
                    </center>
                </Container>
            </div>
        )
    }
};

export default BottomNav;