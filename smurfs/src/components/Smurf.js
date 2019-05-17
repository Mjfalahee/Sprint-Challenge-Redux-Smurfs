import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

function Smurf(props) {
    console.log('Smurf props!');
    console.log(props);
    return (
        <div className="smurf">
            <h3 onClick=''>{props.smurf.name}</h3>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}

 const mapStateToProps = state => ({
     id: state.id
 })

export default connect(mapStateToProps, { getSmurf })(Smurf);