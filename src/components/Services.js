import React, { Component } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//fa-5x
import { faPenFancy  , faTv , faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
// fa-square-poll-horizontal
class Services extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div id="service" className='features text-center pt-5 pb-5'>
                    <div className="container">
                        <div className="main-title mt-5 mb-5 position-relative">
                            <h2>We are Good at</h2>
                            <p className="text-uppercase text-black-50">Some Of These Stuff Under</p>
                        </div>
                        <div>
                            <div className="row d-flex justify-content-center">
                                <div className="card-item col-sm-6 col-md-4 ">
                                    <div className="pt-3 pb-5">
                                        <div className="icons mt-5 mb-5">
                                            <FontAwesomeIcon className='icon fa-5x' icon={ faPenFancy} />
                                        </div>
                                        <h4 className="text-uppercase">Graphic Design</h4>
                                        <p>
                                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-item col-sm-6 col-md-4 ">
                                    <div className="pt-3 pb-5">
                                        <div className="icons mt-5 mb-5">
                                            <FontAwesomeIcon className='icon fa-5x' icon={ faTv} />
                                        </div>
                                        <h4 className="text-uppercase">Web Development</h4>
                                        <p>
                                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-item col-sm-6 col-md-4 ">
                                    <div className="pt-3 pb-5">
                                        <div className="icons mt-5 mb-5">
                                            <FontAwesomeIcon className='icon fa-5x' icon={ faSquarePollHorizontal} />
                                        </div>
                                        <h4 className="text-uppercase">Content Creation</h4>
                                        <p>
                                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Services;