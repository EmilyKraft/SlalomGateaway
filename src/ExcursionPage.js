import React, { Component } from 'react';
import './App.css';
import { NavLink } from "react-router-dom";

class ExcursionPage extends Component {
  render() {
    return (
      <div className="ExcursionPage">
      <p>On Saturday afternoon and Sunday morning, there will be unscheduled time
      available for you and your guest to enjoy all the fun things Chicago has to
      offer. The list below contains outings that other Slalomites are interested
      in doing. Be sure to sign up if you are interested! You are also welcome to
      explore Chicago on your own if you would prefer.</p>
      Insert Table Here
      <br />
      <NavLink to="/excursions/create">Create new excursion</NavLink>
      </div>
    );
  }
}

export default ExcursionPage;
