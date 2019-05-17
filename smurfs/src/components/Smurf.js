import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Link, Redirect, Route } from 'react-router-dom';

class Smurf extends React.Component {
    state = {
        smurf: this.props.smurf
    }

    render() {
    return (
        <div className="smurf">
            <h3><Link to={`/updateform/${this.state.smurf.id}`}>{this.state.smurf.name}</Link></h3>
            <p>{this.state.smurf.age}</p>
            <p>{this.state.smurf.height}</p>
        </div>
    )}
}

 const mapStateToProps = state => ({
     id: state.id
 })

export default connect(mapStateToProps, {})(Smurf);