import React, { Component } from 'react';

class StartProject extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>

                <div className="creating-project d-flex align-items-center justify-content-center">
                    <div className="container text-center text-light">
                        <h2 className="fs-2">
                            Start Your Project Now
                        </h2>
                        <p className="text-white-50">
                            Leave your description and we start imediately. Don't lose your time start now
                        </p>
                        <div className="p-md-3 mt-2">
                            <button className="btn main-btn">Start Project</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default StartProject;
