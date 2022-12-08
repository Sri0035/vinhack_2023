import React, { Component} from "react";

class Landing extends Component {
    render(){
        return(
            <div className="Landing-Body">
                <div className="VinHack">
                    <h1>VinHack'23</h1>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <button className="register blue">REGISTER NOW</button>
                </div>
            </div>
        );
    }
}

export default Landing;