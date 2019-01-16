import React, { Component } from 'react';
import './App.css';
import StudentList from './components/studentList/studentList';

interface AppProps {
}

interface AppStates {
  title: string,
}

class App extends Component<AppProps, AppStates> {

  /*readonly state: AppStates = {
    title: "List of students",
  };*/

  constructor(props: AppProps) {
    super(props);
    this.state = {
      title: "List of students",
    }
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <h2>{this.state.title}</h2>
          <StudentList />
        </div>
      </div>
    );
  }
}

export default App;
