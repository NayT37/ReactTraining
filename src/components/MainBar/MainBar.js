import React, { Component } from 'react';
import './MainBar.css';

class MainBar extends Component {
    render() {
        return (
            <div className="MainBar">
                <h3>Find CE for a FOLRIDA y MEDICAL DOCTOR</h3>
                <div className="SearchBar">
                    <img src="#" alt="Serch Icon" />
                    <input type="text" name="none" placeholder="Search Courses and providers" />
                </div>
            </div>
        );
    }
}

export default MainBar;
