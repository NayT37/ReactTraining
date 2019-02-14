import React, { Component } from 'react';
import './App.css';

import CoursesList from './components/CoursesList/CoursesList';
import FilterResults from './components/FilterResults/FilterResults';
import MainBar from './components/MainBar/MainBar';
import AuxBar from './components/AuxBar/AuxBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  ChangeSearchQuery(value) {
    this.setState({
      searchQuery: value
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <AuxBar />
          <MainBar SearchQueryUpdate={this.ChangeSearchQuery.bind(this)} />
        </nav>
        <div className="Container App__Container">
          <section className="MainSection MainSection__Filter">
            {/* This section must disappear when responsive comes out */}
            <FilterResults />
          </section>
          <section className="MainSection MainSection__Courses">
            {/* All courses, including featured courses */}
            <CoursesList
              shearchQuery={this.state.searchQuery}
            />
          </section>
        </div>

      </div>
    );
  }
}

export default App;
