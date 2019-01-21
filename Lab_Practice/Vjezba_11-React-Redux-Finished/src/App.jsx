import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleIncrementAction, simpleDecrementAction } from './actions/simpleActions';
import './App.css';

const mapStateToProps = state => ( {
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleIncrement: () => dispatch(simpleIncrementAction(5)),
  simpleDecrement: () => dispatch(simpleDecrementAction(5))
})

class App extends Component {
  increment = (event) => {
    this.props.simpleIncrement(5);
  }
  decrement = (event) => {
    this.props.simpleDecrement(5);
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={ this.increment }> Increment Button </button>
        <button onClick={ this.decrement }> decrement Button </button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

//export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
