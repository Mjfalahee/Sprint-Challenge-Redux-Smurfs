import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';
import './App.css';


class updateForm extends React.Component {
    state = {
        placeholder: {
            name: '',
            age: '',
            height: ''
        },
        target: {
            name: '',
            age: '',
            height: ''
        }
    }

    componentDidMount() {
        // this.setState({target: this.props.targetSmurf})
    }
    
  handleChanges = e => {
    this.setState({
      placeholder: {
        ...this.state.placeholder,
        [e.target.name]: e.target.value
      }
    });
  };

  updateHandler = e => {
    e.preventDefault();
    this.setState({placeholder: {
        ...this.state.placeholder,
        id: this.props.target.id
    }})
    this.props.updateSmurf(this.state.placeholder);
    this.setState({placeholder: {
      name: '',
      age: '',
      height: ''
    }, 
    target: {}})
  }

    render() {
        return (
         <div className="form-container">
            <h2>Update Smurf </h2>
            <form className="form" onSubmit={this.updateHandler}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.placeholder.name}
                    onChange={this.handleChanges}>
                </input>
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.placeholder.age}
                    onChange={this.handleChanges}>
                </input>
                <input
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={this.state.placeholder.height}
                    onChange={this.handleChanges}>
                </input>

                <button>Submit</button>
         </form> 
        </div>
        )}
}

const mapStateToProps = state => ({
    isUpdating: state.addingSmurf,
    target: state.targetSmurf
});

export default connect(mapStateToProps, { updateSmurf })(updateForm);