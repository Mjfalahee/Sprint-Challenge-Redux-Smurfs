import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


import Smurfs from './Smurfs';
import addForm from './addForm';

// router stuff
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfs: []
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Link to="/addsmurf">Add a Smurf</Link>
        <Link to="/smurfs"> View Smurf Village </Link>
        {/* {this.props.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} />)} */}
      </div> 

      <Route path="/addsmurf" component={addForm} />
      <Route path="/smurfs" component={Smurfs} />
      </Router>
    );
  }
}


export default App;
