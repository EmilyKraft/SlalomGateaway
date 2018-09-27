import React, { Component } from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import axios from 'axios';

class TransportationPage extends Component {
  state = {
  buses: []
}

componentDidMount() {
  axios.get(`http://localhost:8000/bus`)
    .then(res => {
      const buses = res.data;
      this.setState({ buses });
    })
}
  render() {
    return (
      <div className="TransportationPage">
      <p>Slalom will be paying for buses again this year. There will be staggered
      departure times and different ride styles (party, low-key, mixed). Please
      see the list below to see which buses are currently available, and be sure
      to register for your preferred bus!</p>
      <table><th>Departure Time</th><th>Ride Type</th><th>Description</th><th>Register</th>
      <tbody>
      {this.state.buses.map(bus => (
					<tr key={bus._id}><td>{bus.departureTime}</td>
          <td>{bus.rideType}</td>
          <td>{bus.description}</td>
          <td><NavLink to="/transportation/busRegistration">Sign up</NavLink></td>
          </tr>
				))}
        </tbody>
      </table>
      <br />
      <NavLink to="/transportation/create">Create new bus</NavLink>
      </div>
    );
  }
}

export default TransportationPage;
