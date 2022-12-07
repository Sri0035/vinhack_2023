import React, { Component} from 'react';
import Image1 from './Images/left_logo.png';
import Image2 from './Images/mid_logo.png';
import Image3 from './Images/right_logo.png';


class Prize extends Component {
    render(){
        return(
            <div className='Prize-Main'>
                <body>
                <div className="prize-title">
                    <h2>PRIZES</h2>
                </div>
                <div className="hline1"></div>
                <div className="cash-text">
                    <h2>Cash Prizes and goodies</h2>
                </div>

                <div className="left-img-class">
                <img src={Image1} className="left-img" alt="left logo" />
                <h2 className="lefth2">Top 5</h2>
                <h2 className="lefth2">To be decided</h2>
                <p className="leftp">To be decided</p>
                </div>

                <div className="middle-img-class">
                <img src={Image2} className="mid-img" alt="mid logo" />
                <h2 className="middleh2">Top 5</h2>
                <h2 className="middleh2">To be decided</h2>
                <p className="middlep">To be decided</p>
                </div>

                <div className="right-img-class">
                <img src={Image3} className="right-img" alt="right logo" />
                <h2 className="righth2">Top 5</h2>
                <h2 className="righth2">To be decided</h2>
                <p className="rightp">To be decided</p>
                </div>

    </body>
  </div>
        );
    }
}

export default Prize;