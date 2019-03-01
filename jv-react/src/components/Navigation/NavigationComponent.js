import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';

var NavigationComponent = (props) => {
    return (

        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/'> Pradžia </Link> |&nbsp;
                            </li>
                            <li className="nav-item active">
                                <Link to='/admin'> Pildymas </Link> |&nbsp;
                            </li>
                            
                        </ul>
                        
                    </div>
                </nav>
            </div>
            {props.children}
        </div>);

};

export default NavigationComponent;

