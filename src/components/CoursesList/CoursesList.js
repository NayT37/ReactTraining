import React, { Component } from 'react';
import './CoursesList.css';
import FeaturedCourse from '../FeaturedCourse/FeaturedCourse';

class CoursesList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _actualPage = 1;
        let _totalPages = 10;
        return (
            <div className="CoursesList">
                <div className="CoursesList__Header">
                    <p><strong>Page {_actualPage} </strong>of <strong>{_totalPages} results.</strong></p>
                    <div>
                        <p>Sort By: </p>
                        <div>
                            <p>Desplegable</p>
                        </div>
                    </div>
                </div>
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
