import React from 'react';


function Smurf(props) {
    console.log('Smurf props!');
    console.log(props);
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default Smurf;