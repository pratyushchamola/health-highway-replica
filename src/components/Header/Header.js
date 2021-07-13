// import { Button } from 'bootstrap';
import React from 'react';
import { BiDumbbell } from 'react-icons/bi';

import './index.css';

const Header = () => {
    return (
        <div className="container">
            <div className="headerpart">
                <div className="flexcomponent">
                    <div className="logoname">
                        <BiDumbbell className="logo" size="3rem" color="#4CA9EE" />
                        <div className="para"><span className="health">Health </span><span className="highway">Highway</span></div>
                    </div>

                    <div className="loginButton">
                        <button className="joinUsButton">Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
