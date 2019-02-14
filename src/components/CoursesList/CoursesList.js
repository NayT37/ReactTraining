import React, { Component } from 'react';
import './CoursesList.css';
import FeaturedCourse from '../FeaturedCourse/FeaturedCourse';
import DefaultCourse from '../DefaultCourse/DefaultCourse';

class CoursesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feacturedCoursesArr: [],
            defaultCoursesArr: []
        }
    }

    componentWillMount() {
        this.GetFeaturedCourses();
        this.GetDefaultCourses();
    }

    GetFeaturedCourses() {
        fetch('https://api.cebroker.com/v2/featuredCoursesProfession?profession=36')
            .then((response) => {
                // console.log(response.json());
                return response.json();
            })
            .then((fcourses) => {
                this.setState({ feacturedCoursesArr: fcourses });
            });
    }

    GetDefaultCourses() {
        fetch('https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27')
            .then((response => {
                // console.log(response.json());
                return response.json();
            }))
            .then((courses) => {
                this.setState({ defaultCoursesArr: courses.items });
            });
    }

    render() {
        let _actualPage = 1;
        let _totalPages = 10;
        const IMG_URL = "https://storage.cebroker.com/CEBroker/";

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
                    {/* Rendering Featured Courses from DB */}
                    {
                        this.state.feacturedCoursesArr.map(fcourse => {
                            return (
                                <FeaturedCourse
                                    key={fcourse.id}
                                    title={fcourse.coursePublication.course.name}
                                    description={fcourse.coursePublication.course.number}
                                    courseImg={IMG_URL + fcourse.coursePublication.course.featuredBanner}
                                    time={fcourse.coursePublication.totalHours != 0 ? fcourse.coursePublication.totalHours : "0 Hours"}
                                    /* I wasn't so sure about this field, so I have to use any other field to show somethig related */
                                    trainingType={fcourse.coursePublication.course.status == "IN_PROGRESS" ? "Computer based training" : "On campus based training"}
                                    price={fcourse.coursePublication.course.price != null ? fcourse.coursePublication.course.price : "Free"}
                                />
                            );
                        })
                    }
                </div>
                <div>
                    {/*    This is for debuggin porpuses {console.log(this.state.defaultCoursesArr)}   */}
                    {console.log(this.state.defaultCoursesArr)}
                    {/* Rendering Default Courses from DB */}
                    {
                        this.state.defaultCoursesArr.map(dcourse => {
                            return (
                                <DefaultCourse
                                    key={dcourse.id}
                                    title={dcourse.course.name}
                                    description={"More info at " + dcourse.course.registrationWebsite}
                                    time={dcourse.course.totalHours + " Hours"}
                                    trainingType={dcourse.course.deliveryMethod.description}
                                    price={dcourse.price != 0 ? dcourse.price + " $" : "Free"}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CoursesList;
