import React, { Component } from 'react';
import './App.css';

import CoursesList from './components/CoursesList/CoursesList';
import FilterResults from './components/FilterResults/FilterResults';
import MainBar from './components/MainBar/MainBar';
import AuxBar from './components/AuxBar/AuxBar';

class App extends Component {

  render() {


    return (
      <div className="App">
        <nav>
          <AuxBar />
          <MainBar />
        </nav>
        <div className="Container App__Container">
          <section className="MainSection MainSection__Filter">
            {/* This section must disappear when responsive comes out */}
            <FilterResults />
          </section>
          <section className="MainSection MainSection__Courses">
            {/* All courses, including featured courses */}
            <CoursesList />
          </section>
        </div>

      </div>
    );
  }
}

export default App;
