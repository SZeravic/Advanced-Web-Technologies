import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import StudentList from './components/studentList/studentList';

export interface AppProps {
    
}

export interface AppState {
    title: string;
}

class App extends Component<AppProps, AppState>  {
  constructor(props: AppProps) {
    super(props);
    //Stateless component
    //this.state = { :  };

    // this.state = {
    //   title: "List of students",
    // };

    // - Doesn't work cause state is Read Only - changes alot
    // this.state.title = "asdasdasd";

    // v2
    this.state = {
        title: "Unknown",
     };
    }

    // - Componenta se promjeni kad se ucita (Promjeni state)
    componentDidMount() {
       this.setState({
         title: "List of students",
       })
     }

     componentDidUpdate() {
       console.log("UPDATED!!!")
     }

  // render() {
  //   return (
  //     //<div>App</div>
  //     <div>
  //       <h2>{this.state.title}</h2>
  //     </div>
  //   )
  // };
  
  // v2
  render() {
    return (
      <div className="container">
        <div className="content">
          <h2>{this.state.title}</h2>
          <StudentList />
        </div>
      </div>
    )
  };


  // - "Deleted"
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
