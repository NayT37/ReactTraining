import React, { Component } from 'react';
import './App.css';

import CoursesList from './components/CoursesList/CoursesList';
import FilterResults from './components/FilterResults/FilterResults';
import MainBar from './components/MainBar/MainBar';
import AuxBar from './components/AuxBar/AuxBar';

class App extends Component {

  render() {
    let _actualPage = 1;
    let _totalPages = 10;

    return (
      <div className="App">
        <AuxBar />
        <MainBar />

        <div className="Container">
          <section className="MainSection MainSection__Filter">
            {/* This section must disappear when responsive comes out */}
            <FilterResults />
          </section>
          <section className="MainSection MainSection__Courses">
            <p>Page {_actualPage} of {_totalPages} results</p>
            {/* All courses, including featured courses */}
            <CoursesList />
          </section>
        </div>

      </div>
    );
  }
}

export default App;
