import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';
import './App.css';


class updateForm extends React.Component {
    state = {
        smurf: {}
    }

    componentDidMount() {
        fetchSmurf();
    }
    
  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  updateHandler = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf);
    this.setState({smurf: {
      name: '',
      age: '',
      height: ''
    }})
  }

    render() {
        return (
         <div className="form-container">
            <h2>Add a new Smurf </h2>
            <form className="form" onSubmit={this.updateHandler}>
                <input
                    type="text"
                    name="name"
                    placeholder={this.props.smurf.name}
                    value={this.state.smurf.name}
                    onChange={this.handleChanges}>
                </input>
                <input
                    type="text"
                    name="age"
                    placeholder={this.props.smurf.age}
                    value={this.state.smurf.age}
                    onChange={this.handleChanges}>
                </input>
                <input
                    type="text"
                    name="height"
                    placeholder={this.props.smurf.height}
                    value={this.state.smurf.height}
                    onChange={this.handleChanges}>
                </input>

                <button>Submit</button>
         </form> 
        </div>

        )}

}

const mapStateToProps = state => ({
    isUpdating: state.addingSmurf
    smurf: state.targetSmurf
});

export default connect(mapStateToProps, { addSmurf })(addForm);