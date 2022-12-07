import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div className="BodyFooter">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="https://www.vinnovateit.com/#about" target="_blank">about us</a></li>
                                <li><a href="https://www.vinnovateit.com/#projects" target="_blank">our projects</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Projects by VinnovateIT</h4>
                            <ul>
                                <li><a href="https://atlas.vinnovateit.com/" target="_blank">Atlas</a></li> 
                                <li><a href="https://amigos.vitspot.com/" target="_blank">Amigos</a></li>
                                <li><a href="https://studyhub.vinnovateit.com/" target="_blank">StudyHub</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Our Socials</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/VinnovateIT/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/v_innovate_it" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/vinnovateit/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/v-innovate-it/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://github.com/VinnovateIT/" target="_blank"><i className="fab fa-github"></i></a>
                                <a href="https://www.youtube.com/channel/UClqr0ir3N1_sG4ubZjEDe3g" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a href="mailto:vinnovateit@gmail.com " target="_blank "><i className="fas fa-envelope "></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        )
    }
}

export default Footer;