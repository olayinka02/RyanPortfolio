import React, { Component } from "react";
import SectionLine from './images/SectionLine.svg';


class LineSection extends Component {

    render() {
        return (
            <div>
                <center>
                    <img
                        src={SectionLine}
                        className="d-inline-block sectionLine"
                        alt="sectionline"
                    />
                </center>
            </div>
        )
    }
};

export default LineSection;