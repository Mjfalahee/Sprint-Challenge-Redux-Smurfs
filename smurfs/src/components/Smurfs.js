import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import Smurf from './Smurf';

class Smurfs extends Component {
    state = {
      smurfs: []
    }

    componentDidMount() {
        this.props.getSmurfs();
        //calling creator to populate smurfs.
      }

    render() {
        if (this.props.fetching) {
            return <div> Grabbing Smurfs </div>
        }
        return (
            <div className="App">
                {this.props.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} />)}
            </div>
        )};
    }

    const MapStateToProps = state => ({
            smurfs: state.smurfs,
            fetching: state.fetchingSmurfs
    });
    
    export default connect(MapStateToProps, { getSmurfs})(Smurfs);
    
        
    