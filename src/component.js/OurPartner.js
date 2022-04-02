import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';






class OurPartner extends Component {

    render() {
        return (
            <div>
                <center>
                    <h3>Our Partner</h3>
                </center>
                <Carousel controls={false} touch={true} pause="hover">
                    <Carousel.Item className="CarouselItemOne" interval={5000}>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="CarouselItemTwo" interval={5000}>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="CarouselItemThree">
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
};

export default OurPartner;