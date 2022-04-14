import React, { Component } from "react";
import { Container  } from "react-bootstrap";

import NavBodyx from "./NavBodyx";
import Formpage from "./Formpage";
import BottomNav from "./BottomNav";






class Meetteam extends Component {

    render() {
        return (
            <div classname="BodySection">
                {/* Navbar */}
                <NavBodyx /><br/>

                <Container>
                    <div style={{height:"20rem", marginTop:"20rem",}}>
                        <center>
                        <h1 style={{color:'white'}}>meet our team here</h1>
                        </center>
                    </div>
                </Container><br/><br/>

                <Formpage /><br />

                <BottomNav />


            </div>
        )
    }
};

export default Meetteam;