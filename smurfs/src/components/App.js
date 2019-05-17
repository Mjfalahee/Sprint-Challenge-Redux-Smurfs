import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


import Smurfs from './Smurfs';
import addForm from './addForm';
import updateForm from './updateForm';

// router stuff
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
function App() {
    return (
      <Router>
      <div className="App">
        <h4><Link to="/addsmurf">Add a Smurf</Link></h4>
        <h4><Link to="/smurfs"> View Smurf Village </Link></h4>
      </div> 

      <Route path="/addsmurf" component={addForm} />
      <Route path="/smurfs" component={Smurfs} />
      <Route path="/updateform/:id" component={updateForm} />
      </Router>
    );
}


export default App;
