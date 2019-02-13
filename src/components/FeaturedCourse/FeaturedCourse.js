import React, { Component } from 'react';
import './FeaturedCourse.css';

class FeaturedCourse extends Component {

    render() {
        return (
            <div className="FeaturedCourse">
                {/* if it's featured show, if not dont show */}
                <div className="FeaturedCourse_Img"><img src="#" alt="Course Image" className="CourseImg" /></div>
                <div className="FeaturedCourse_Info">
                    <h3 className="CourseTitle">{this.props.title}</h3>
                    <p className="CourseDesc">{this.props.description}</p>
                    <div className="CourseBottomInfo">
                        <p className="CourseBottomInfo__TxtInfo">{this.props.time}</p>
                        <p className="CourseBottomInfo__TxtInfo">{this.props.trainingType}</p></div>
                </div>
                <div className="FeaturedCourse_EndTag">
                    <p className="PriceTxt">{this.props.price}</p>
                    <button><img src="#" alt="Share Image" /></button>
                </div>
            </div>
        );
    }
}

export default FeaturedCourse;
