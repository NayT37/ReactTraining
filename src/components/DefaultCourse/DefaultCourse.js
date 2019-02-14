import React, { Component } from 'react';
import './DefaultCourse.css';
import time_img from '../../assets/img/time_icon.svg';
import type_img from '../../assets/img/laptop_icon.svg';
import share_img from '../../assets/img/reply_icon.svg';
import course_img from '../../assets/img/defaultCourseImg.png';

class DefaultCourse extends Component {

    render() {
        return (
            <div className="DefaultCourse">
                <div className="DefaultCourse_Info">
                    <h5 className="CourseTitle">{this.props.title}</h5>
                    <p className="CourseDesc">{this.props.description}</p>
                    <div className="CourseBottomInfo">
                        <img src={time_img} alt="Share Image" className="Image__Course" />
                        <p className="CourseBottomInfo__TxtInfo">{this.props.time}</p>
                        <img src={type_img} alt="Share Image" className="Image__Course" />
                        <p className="CourseBottomInfo__TxtInfo">{this.props.trainingType}</p></div>
                </div>
                <div className="DefaultCourse_EndTag">
                    <p className="PriceTxt">{this.props.price}</p>
                    <button className="Button__Default"><img src={share_img} alt="Share Image" className="Image__EndTag Flipped" /></button>
                </div>
            </div>
        );
    }
}

export default DefaultCourse;
