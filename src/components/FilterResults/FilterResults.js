import React, { Component } from 'react';
import './FilterResults.css';

class FilterResults extends Component {
    render() {
        return (
            <div className="FilterResults">
                <div className="Header__FilterResults">
                    <h3>FILTER COURSE RESULTS</h3>
                </div>
                {/* First Filter */}
                <div className="Container__FilterResults">
                    <h5>Course type</h5>
                    <div>
                        <form>
                            <ul>
                                <li>
                                    <input type="radio" name="CourseType" id="Self" value="male" />
                                    <label htmlFor="Self">Self paced</label>
                                </li>
                                <li>
                                    <input type="radio" name="CourseType" id="Live" value="male" />
                                    <label htmlFor="Live">Live</label>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                {/* Second Filter */}
                <div className="Container__FilterResults">
                    <h5>Delivery type</h5>
                    <div>
                        <form>
                            <ul>
                                <li>
                                    <input type="radio" name="DeliveryType" id="delivery" value="male" />
                                    <label htmlFor="delivery">Any delivery type</label>
                                </li>
                                <li>
                                    <input type="radio" name="DeliveryType" id="Computer" value="male" />
                                    <label htmlFor="Computer">Computer-Based Training</label>
                                </li>
                                <li>
                                    <input type="radio" name="DeliveryType" id="Correspondence" value="male" />
                                    <label htmlFor="Correspondence">Correspondence</label>
                                </li>
                                <li>
                                    <input type="radio" name="DeliveryType" id="Mailed" value="male" />
                                    <label htmlFor="Mailed">Mailed Material</label>
                                </li>
                            </ul>
                        </form>
                        <p className="FakeLink">View More</p>
                    </div>
                </div>

                {/* Third Filter */}
                <div className="Container__FilterResults">
                    <h5>Subject area</h5>
                    <div>
                        <form>
                            <ul>
                                <li>
                                    <input type="radio" name="SubjectArea" id="subject" value="male" />
                                    <label htmlFor="subject">Any subject Area</label>
                                </li>
                                <li>
                                    <input type="radio" name="SubjectArea" id="HIV" value="male" />
                                    <label htmlFor="HIV">HIV/AIDS</label>
                                </li>
                                <li>
                                    <input type="radio" name="SubjectArea" id="Palliative" value="male" />
                                    <label htmlFor="Palliative">End-of-Life Care and Palliative Healrh Care</label>
                                </li>
                                <li>
                                    <input type="radio" name="SubjectArea" id="Domestic" value="male" />
                                    <label htmlFor="Domestic">Domestic Violence</label>
                                </li>
                            </ul>
                        </form>
                        <p className="FakeLink">View More</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterResults;
