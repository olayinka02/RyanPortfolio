import React, { Component } from "react";
import LeftImage from './images/LeftImage.gif';




class ImageLeft extends Component {

    render() {
        return (
            <div>
                 
                  <img 
                  
                    className="img-fluid leftImage"
                    src={LeftImage}
                    alt="leftImage"
                />
               
                



            </div>
        )
    }
};

export default ImageLeft;