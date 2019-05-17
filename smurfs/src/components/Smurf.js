import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { targetSmurf } from '../actions';
import { Link, Redirect } from 'react-router-dom';

class Smurf extends React.Component {
    state = {
        smurf: this.props.smurf
    }

    ClickHandler = e => {
        e.preventDefault();
        console.log("CLICKED SMURF");
        console.log(this.state.smurf.id);
        this.props.targetSmurf(this.state.smurf.id).then(() => {
            <Redirect to='/updateform' />
        });

    }
    render() {
    return (
        <div className="smurf">
            <h3 onClick={this.ClickHandler}>{this.state.smurf.name}</h3>
            <p>{this.state.smurf.age}</p>
            <p>{this.state.smurf.height}</p>
        </div>
    )}
}

 const mapStateToProps = state => ({
     id: state.id
 })

export default connect(mapStateToProps, { targetSmurf })(Smurf);