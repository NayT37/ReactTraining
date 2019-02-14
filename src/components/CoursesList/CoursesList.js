import React, { Component } from 'react';
import './CoursesList.css';
import FeaturedCourse from '../FeaturedCourse/FeaturedCourse';

class CoursesList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CoursesList">
                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>
                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>                <div className="FeaturedCourses__Container">
                    {/* This guy it's gonna be rendered with a list */}
                    <FeaturedCourse
                        title="My title"
                        description="I am a description"
                        time="5hours"
                        trainingType="Computer based training"
                        price="1$" />
                </div>
            </div>
        );
    }
}

export default CoursesList;
