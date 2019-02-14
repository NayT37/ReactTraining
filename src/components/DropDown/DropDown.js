import React, { Component } from 'react';
import './DropDown.css';

class DropDown extends Component {

    constructor(props) {
        super(props);

        this.showHideRef = React.createRef();

        this.state = {
            itemsDropped: true,
            renderedTxt: ' map '
        }
    }

    componentDidMount() {
        this.ChangeRenderedTxt(this.props.itemsToDrop[0]);
    }

    DropDownItems() {
        this.setState({
            itemsDropped: !this.state.itemsDropped
        });
        var foo = this.showHideRef.current;
        if (foo.style.display === "none") {
            foo.style.display = "block";
        } else {
            foo.style.display = "none";
        }
    }

    ChangeRenderedTxt(value) {
        this.setState({
            renderedTxt: value
        });
        this.DropDownItems();
    }

    render() {
        return (
            <div className="DropDown">
                <div className="DropDown__Container" onClick={this.DropDownItems.bind(this)}>
                    <p>{this.state.renderedTxt}</p> <span className="TriangleDown"></span>
                </div>
                <div ref={this.showHideRef} className="DropDown__List">
                    {
                        this.props.itemsToDrop.map(dItem => {
                            return (
                                <span key={dItem} onClick={this.ChangeRenderedTxt.bind(this, dItem)}>
                                    <p>{dItem}</p>
                                </span>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default DropDown;
