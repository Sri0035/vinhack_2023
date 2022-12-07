import React, { Component} from 'react';

class NavigationBar extends Component{
    render(){
        return(
            <div className='Main'>
            <body>
                <div className='MainHeader'>
                    <div class="ham">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="header">
                        <h2><a href="#">VinHack</a></h2>
                        <nav>
                            <ul className="navbar">
                                <li><a class="current" href="#">HOME</a></li>
                                <li><a href="#">ABOUT US</a></li>
                                <li><a href="#">TIMELINE</a></li>
                                <li><a href="#">LEADERBOARD</a></li>
                                <li><a href="#">CONTACT</a></li>
                            </ul>
                            <a href="#"><button class="lgnbtn">LOGIN</button></a>
                            <a href="#"><button class="regbtn">REGISTER</button></a>
                        </nav>
                    </div>
                </div>
            

                <div className='NavShape'>
                    <div class="navshape">
                        <div class="hollowshape"></div>
                    </div>
                    <div class="test"></div>
                    <script src="navbar.js"></script>
                </div>
            </body>
            </div>
        )
    }
}

export default NavigationBar; 