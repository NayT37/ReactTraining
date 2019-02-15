import React, { Component } from 'react';
import './TabGroup.css';
import TabChild from './TabChild/TabChild';

class TabGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabsToShow: []
        }
    }

    componentDidMount() {
        this.setState({
            tabsToShow: this.props.tabsToShow
        });
    }

    UpdateTabs(value) {
        localStorage.setItem("Tab", value);
        if (value == 1) {
            alert("We still doesn't have providers, please remain in courses");
        }
    }

    render() {
        return (
            <div className="TabGroup">
                <div ref={this.showHideRef} className="TabGroup__Tabs">
                    {
                        this.state.tabsToShow.map((tab, index) => {
                            return (
                                <TabChild
                                    key={tab}
                                    name={tab}
                                    arrayPos={index}
                                    tabClicked={this.UpdateTabs.bind(this)}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TabGroup;
