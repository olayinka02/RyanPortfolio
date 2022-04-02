import React, { Component } from "react";
import { Button } from 'react-bootstrap';




class FirstSectionLeft extends Component {

    render() {
        return (
            <div className="bodyme">
              
                <h1 className="FirstSectionLeftHeading">
                    Made With Fun Professionality
                </h1>

                <p className="FirstSectionLeftParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Venenatis, amet, nunc tincidunt eget feugiat.
                    Ipsum fringilla mauris eget dolor, sit sed vitae
                    vestibulum amet. Montes, semper donec hendrerit volutpat
                    diam est turpis massa molestie.
                </p>
                <Button className="SeeMoreBtn" variant="outline-light">
                    <div className="SeeMoreBtnInner">
                        See More
                    </div>
                </Button>
               
            </div>
        )
    }
};

export default FirstSectionLeft;