import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


class addForm extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    }
    
  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({smurf: {
      name: '',
      age: '',
      height: ''
    }})
  }

    render() {
        return (
         <div>
            <h2>Add a new Smurf </h2>
            <form onSubmit={this.addHandler}>
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

        )}

}

const mapStateToProps = state => ({
    isAdding: state.addingSmurf
});

export default connect(mapStateToProps, { addSmurf })(addForm);