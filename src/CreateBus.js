import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class CreateBus extends Component {

  constructor(props){
   super(props);
   this.goBack = this.goBack.bind(this);
}

state= {
  departureTime: '',
  rideType: '',
  description: '',
  disableButton: true
}

handleChange = (event, key) => {
  console.log(event.target.value);
  this.setState({[key]: event.target.value});
}

goBack(){
    this.props.history.goBack();
}

validateForm = () => {
  let errors = false;
		let errorMessages : string[] = [];
		if (!(this.state.departureTime.length > 0)) {
			errorMessages.push("Departure time must be populated.");
		}
		if (!(this.state.description.length > 5)) {
			errorMessages.push("Bus description must be longer than 5 characters.");
		}
    if (!(this.state.rideType.length > 0)) {
      errorMessages.push("Ride type must be selected.");
    }
		if (errorMessages.length > 0){
			errors = true;
		}
		this.setState({disableButton: errors});
}

formatTime(timeInput) {
  let minutes = timeInput.slice(2, 5);
  let hour = parseFloat(timeInput) % 12;
  let amPm = 'AM';
  if (parseFloat(timeInput)/12 > 1){
    amPm = 'PM';
  }
  return hour + minutes + ' ' + amPm;
}

  handleSubmit = event => {
  event.preventDefault();

  axios.post(`http://localhost:8000/bus`, { departureTime: this.formatTime(this.state.departureTime),
  rideType: this.state.rideType,
  description: this.state.description })
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.goBack();
    })
}

  render() {
    return (
      <div className="CreateBus">
              <Form onSubmit={this.handleSubmit}>
              <FormGroup>
              <Label>Departure Time: </Label>
              <Input type="time" name="departureTime" onChange={(event) => this.handleChange(event, 'departureTime')} onBlur={(event) => this.validateForm()}/>
              </FormGroup>
              <br />
              <FormGroup>
              <Label>Ride Type: </Label>
              <select name="rideType" onChange={(event) => this.handleChange(event, 'rideType')} onBlur={(event) => this.validateForm()}>
              <option value="">SELECT ONE</option>
        <option value="Party">Party</option>
        <option value="Low-Key">Low-Key</option>
        <option value="Mixed">Mixed</option>
      </select>
      </FormGroup>
      <br />
      <FormGroup>
              <Label>Bus Information: </Label>
              <textarea name="message" onChange={(event) => this.handleChange(event, 'description')} rows="10" cols="30" onBlur={(event) => this.validateForm()}/>
              </FormGroup>
              <br />
              <Input type="submit" value="Create" disabled={this.state.disableButton}/>
              <Button onClick={this.goBack}>Cancel</Button>
              </Form>
      </div>
    );
  }
}

export default CreateBus;
