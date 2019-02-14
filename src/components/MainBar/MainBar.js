import React, { Component } from 'react';
import './MainBar.css';
import search_icon from '../../assets/img/search_icon.svg';

class MainBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            search: ''
        }

        this.inputTxtFieldRef = React.createRef();

        //Bind to use the function without problems
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll() {
        let scroll = document.documentElement.scrollTop

        if (scroll > 0) {
            this.setState({
                expanded: false
            });
        } else {
            this.setState({
                expanded: true
            });
            this.inputTxtFieldRef.current.focus();
        }
    }

    UpdateSearch(event) {
        var temp = event.target.value;
        this.setState({
            search: temp
        });
        /* Call the property to change, I don't know if this is the best but it works :v */
        this.props.SearchQueryUpdate(temp);
    }

    render() {
        if (this.state.expanded) {
            return (
                <div className="MainBar">
                    <div className="MainBar__Header MainBar__Content">
                        <div><h2 className="MainBar__SectionTitle">Find CE for a</h2></div>
                        <div><p>Desplegable</p></div>
                        <div><p>Desplegable</p></div>
                    </div>

                    <div className="SearchBar MainBar__Content">
                        <img src={search_icon} alt="Serch Icon" className="Icon MainBar__Icon" />
                        <input type="text" name="none" placeholder="Search Courses and providers" autoComplete="off" ref={this.inputTxtFieldRef}
                            value={this.state.search}
                            onChange={this.UpdateSearch.bind(this)}
                        />
                    </div>

                    <div className="TabContainer__MainBar MainBar__Content">
                        <div><p>Courses</p></div>
                        <div><p>Providers</p></div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="MainBar">
                    <div className="SearchBar MainBar__Content SearchBar_Alone">
                        <img src={search_icon} alt="Serch Icon" className="Icon MainBar__Icon" />
                        <input
                            type="text" name="none" placeholder="Search Courses and providers" autoComplete="off"
                            value={this.state.search}
                            onChange={this.UpdateSearch.bind(this)}
                        />
                    </div>
                </div>
            );
        }

    }
}

export default MainBar;
