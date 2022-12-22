import React  , {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
                <nav className="navbar navbar-expand-lg sticky-top bg-light">
                    <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <h3>Bat-Bugs</h3>
                    </a>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-content" aria-controls="navbar-collapse-content" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className='text-dark' icon={ faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-collapse-content">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item p-2 p-lg-3">
                            <a className="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item p-2 p-lg-3">
                            <a className="nav-link" href="#service">Services</a>
                        </li>
                        <li className="nav-item p-2 p-lg-3">
                            <a className="nav-link" href="index.html">Portfolio</a>
                        </li>
                        <li className="nav-item p-2 p-lg-3">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Header;