import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSquareFacebook , faYoutube , faLinkedin , faSquareTwitter} from '@fortawesome/free-brands-svg-icons'
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <footer className="text-center text-md-start">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mt-4 mb-4">
                                    <h3 style={{
                                        fontFamily: "Pacifico", 
                                        color:"white",
                                    }}>Bat-Bugs</h3>
                                </div>
                                <p className="text-white-50">
                                    Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                </p>
                                <p className="text-white-50">Created By <span class="text-info fw-bold">BitBugs</span><br/> &copy; 2022 -  <span className="text-warning fw-bold">BuGs Inc</span></p>
                            </div>
                            <div className="col-md-6 mt-3">
                                <h5 className="text-light mt-4 mb-2">Contact Us</h5>
                                <p className="text-white-50">
                                    Get in touch with us via mail. We are waiting for your message
                                </p>
                                <button className="btn w-100 main-btn">Batbugs@bugs.com</button>
                                <div className="mt-3 text-light">
                                    <a className="social-link" href="https://www.facebook.com">
                                        <FontAwesomeIcon className='p-2 fs-2' icon={ faSquareFacebook} />
                                    </a>
                                    
                                    <a className="social-link" href="https://www.facebook.com">
                                        <FontAwesomeIcon className='p-2 fs-2' icon={ faYoutube} />
                                    </a>
                                    
                                    <a className="social-link" href="https://www.facebook.com">
                                        <FontAwesomeIcon className='p-2 fs-2' icon={ faLinkedin} />
                                    </a>
                                   
                                    <a className="social-link" href="https://www.facebook.com">
                                        <FontAwesomeIcon className='p-2 fs-2' icon={ faSquareTwitter} />
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
 
export default Footer;