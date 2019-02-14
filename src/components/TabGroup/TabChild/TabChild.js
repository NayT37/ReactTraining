import React, { Component } from 'react';
import './TabChild.css';

class TabChild extends Component {

    constructor(props) {
        super(props);

        this.titleRef = React.createRef();

        this.state = {
            name: 'Tab Name',
            isActive: false,
            arrayPos: null
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            arrayPos: this.props.arrayPos
        });
    }

    TabPressed() {
        this.props.tabClicked(this.state.arrayPos);
        // this.ToActiveTabWithStorage();
    }

    ToActiveTabWithStorage() {
        var tab = this.titleRef.current;
        if (localStorage.getItem('Tab') == this.state.arrayPos) {
            tab.style.fontWeight = "Bold";
            tab.style.color = "Red";
        } else {
            tab.style.fontWeight = "100";
            tab.style.color = "White";
        }

    }

    render() {
        return (
            <div className="TabChild">
                <span onClick={this.TabPressed.bind(this)}>
                    <p ref={this.titleRef}>{this.state.name}</p>
                </span>
            </div>
        );
    }
}

export default TabChild;
