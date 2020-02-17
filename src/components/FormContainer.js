import React, {Component} from 'react';
import FormComponent from './FormComponent.js';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendToParent();
    this.setState({location: ''});
  }

  sendToParent = () => {
    this.props.updateLocation(this.state);
  }

  render() {
    return(
      <FormComponent 
        data={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default FormContainer;