import React, { Component } from 'react';

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div id="contact" className="subscribe pt-5 pb-5">
                    <div className="container">
                        <div className="main-title mt-3 mb-5 position-relative text-center">
                            <h2>Contact Us</h2>
                            <p className="text-uppercase text-black-50">Many Words in a message can make alot.</p>
                        </div>
                        <form action="" className="row pt-3">
                            <div className="col-md-6 mb-4">
                                <label for="inputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail1"/>
                            </div>
                            <div className="col-md-6 mb-4">
                                <label for="inputphone2" className="form-label">Phone Number</label>
                                <input type="tel" className="form-control" id="inputphone2"/>
                            </div>
                            <div className="col-md-6 mb-4">
                                <label for="inputselect1" className="form-label">Category</label>
                                <select id="inputselect1" className="form-control">
                                    <option value="Web">Web Development</option>
                                    <option value="graphic">Graphic Design</option>
                                    <option value="content">Content Creation</option>
                                </select>
                            </div> 
                            <div className="col-md-6 mb-4">
                                <label for="inputselect2" className="form-label">About</label>
                                <select id="inputselect2" className="form-control">
                                    <option value="newproject">New Project</option>
                                    <option value="Query">Query</option>
                                </select>
                            </div> 
                            <div className="col-12 mb-4">
                                <label for="inputContent" className="form-label">Your Message</label>
                                <input type="text" className="form-control" id="inputContent"/>
                            </div> 
                            <div className="col-md-12 text-center">
                                <input type="submit" className="btn main-btn mb-3 mt-3" value="Send"/>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}
 
export default Contact;
