import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
import Smurf from './Smurf';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfs: [],
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
    //calling creator to populate smurfs.
  }

  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  AddHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({smurf: {
      name: '',
      age: '',
      height: ''
    }})
  }


  render() {
    if (this.props.fetching) {
      return <div> Grabbing Smurfs </div>
    }
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} />)}
        <h2>Add a new Smurf </h2>
        <form>
          <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.smurf.name}
          onChange={this.handleChanges}>
          </input>
          <input
          type="text"
          name="age"
          placeholder="Age"
          value={this.state.smurf.age}
          onChange={this.handleChanges}>
          </input>
          <input
          type="text"
          name="height"
          placeholder="Height"
          value={this.state.smurf.height}
          onChange={this.handleChanges}>
          </input>

          <button>Submit</button>
          </form> 
      </div>
    );
  }
}


const MapStateToProps = state => ({
        smurfs: state.smurfs,
        fetching: state.fetchingSmurfs
});

export default connect(MapStateToProps, { addSmurf, getSmurfs})(App);
