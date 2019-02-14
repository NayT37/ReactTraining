import React, { Component } from 'react';
import './AuxBar.css';
import logo from '../../assets/img/CB_Logo.svg';
import drop_icon from '../../assets/img/arrow_icon.svg';

class AuxBar extends Component {
    render() {
        return (
            <div className="AuxBar">
                <div className="AuxBar__LimiterContainer">
                    <div className="AuxBar__LogoContainer"> <img src={logo} alt="MainLogo" /></div>
                    <div className="AuxBar__Container">
                        <ul className="AuxBar__ListContainer">
                            <li> <p>Features</p> </li>
                            <li> <p>Plans</p> </li>
                            <li> <p>Organizations </p> <div className="AuxBar__ImgContainer"><img src={drop_icon} /></div></li>
                            <li> <p>Browse Courses</p> </li>
                            <li> <p>Support</p> </li>
                        </ul>
                    </div>
                    <div className="AuxBar__SecondaryNav">
                        <button className="Button__Default">Sing in</button>
                        <button className="Button__Green">7 day trial</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuxBar;
