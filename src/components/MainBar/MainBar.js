import React, { Component } from 'react';
import './MainBar.css';
import search_icon from '../../assets/img/search_icon.svg';

class MainBar extends Component {
    render() {
        return (
            <div className="MainBar">
                <div className="MainBar__Header MainBar__Content">
                    <div><h2 className="MainBar__SectionTitle">Find CE for a</h2></div>
                    <div><p>Desplegable</p></div>
                    <div><p>Desplegable</p></div>
                </div>

                <div className="SearchBar MainBar__Content">
                    <img src={search_icon} alt="Serch Icon" className="Icon MainBar__Icon" />
                    <input type="text" name="none" placeholder="Search Courses and providers" />
                </div>

                <div className="TabContainer__MainBar MainBar__Content">
                    <div><p>Courses</p></div>
                    <div><p>Providers</p></div>
                </div>
            </div>
        );
    }
}

export default MainBar;
