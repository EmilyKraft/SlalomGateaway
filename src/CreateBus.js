import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class CreateBus extends Component {

state= {
  departureTime: '',
  rideType: '',
  description: ''
}

handleChange = (event, key) => {
  console.log("What's up?");
  this.setState({[key]: event.target});
}

  handleSubmit = event => {
    console.log("I'm doing a thing!");
  event.preventDefault();

  const bus = {
    departureTime: this.state.departureTime,
    rideType: this.state.rideType,
    description: this.state.description
  };

  axios.post(`http://localhost:8000/bus`, { bus })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

  render() {
    return (
      <div className="CreateBus">
              <Form onSubmit={this.handleSubmit}>
              <FormGroup>
              <Label>Departure Time: </Label>
              <Input type="time" name="departureTime" onChange={(event) => this.handleChange(event, 'departureTime')}/>
              </FormGroup>
              <br />
              <FormGroup>
              <Label>Ride Type: </Label>
              <select name="rideType" onChange={this.handleChange}>
        <option value="Party">Party</option>
        <option value="Low-Key">Low-Key</option>
        <option value="Mixed">Mixed</option>
      </select>
      </FormGroup>
      <br />
      <FormGroup>
              <Label>Bus Information: </Label>
              <textarea name="message" onChange={this.handleChange} rows="10" cols="30" />
              </FormGroup>
              <br />
              <Input type="submit" value="Create" />
              <Button>Cancel</Button>
              </Form>
      </div>
    );
  }
}

export default CreateBus;
