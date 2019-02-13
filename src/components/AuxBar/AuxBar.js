import React, { Component } from 'react';
import './AuxBar.css';

class AuxBar extends Component {
    render() {
        return (
            <div className="AuxBar">
                <img src="#" alt="MainLogo" />
                <div className="Navigation">
                    <div>
                        <ul>
                            <li> <p>Features</p> </li>
                            <li> <p>Plans</p> </li>
                            <li> <p>Organizations <img src="#" /></p> </li>
                            <li> <p>Browse Courses</p> </li>
                            <li> <p>Support</p> </li>
                        </ul></div>
                    <div className="SecondaryNav">
                        <button>Sing in</button>
                        <button>7 day trial</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default AuxBar;
