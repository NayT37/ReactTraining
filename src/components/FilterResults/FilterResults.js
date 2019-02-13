import React, { Component } from 'react';
import './FilterResults.css';

class FilterResults extends Component {
    render() {
        return (
            <div className="FilterResults">
                <h3>FILTER COURSE RESULTS</h3>

                {/* First Filter */}
                <div>
                    <h5>Course type</h5>
                    <div>
                        <form>
                            <ul>
                                <li>
                                    <input type="radio" name="CourseType" id="Self" value="male" />
                                    <label for="Self">Self paced</label>
                                </li>
                                <li>
                                    <input type="radio" name="CourseType" id="Live" value="male" />
                                    <label for="Live">Live</label>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                {/* Second Filter */}
                <div>
                    <h5>Delivery type</h5>
                    <div>
                        <form>
                            <ul>
                                <li>
                                    <input type="radio" name="DeliveryType" id="delivery" value="male" />
                                    <label for="delivery">Any delivery type</label>
                                </li>
                                <li>
                                    <input type="radio" name="DeliveryType" id="Computer" value="male" />
                                    <label for="Computer">Computer-Based Training</label>
                                </li>
                                <li>
                                    <input type="radio" name="DeliveryType" id="Correspondence" value="male" />
                                    <label for="Correspondence">Correspondence</label>
                                </li>
                                <li>
                                    <input type="radio" name="DeliveryType" id="Mailed" value="male" />
                                    <label for="Mailed">Mailed Material</label>
                                </li>
                            </ul>
                        </form>
                        <p>View More</p>
                    </div>
                </div>

                {/* Third Filter */}
                <div>
                    <h5>Subject area</h5>
                    <div>
                        <form>
                            <ul>
                                <li>
                                    <input type="radio" name="SubjectArea" id="subject" value="male" />
                                    <label for="subject">Any subject Area</label>
                                </li>
                                <li>
                                    <input type="radio" name="SubjectArea" id="HIV" value="male" />
                                    <label for="HIV">HIV/AIDS</label>
                                </li>
                                <li>
                                    <input type="radio" name="SubjectArea" id="Palliative" value="male" />
                                    <label for="Palliative">End-of-Life Care and Palliative Healrh Care</label>
                                </li>
                                <li>
                                    <input type="radio" name="SubjectArea" id="Domestic" value="male" />
                                    <label for="Domestic">Domestic Violence</label>
                                </li>
                            </ul>
                        </form>
                        <p>View More</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterResults;
