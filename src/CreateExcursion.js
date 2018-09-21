import React, { Component } from 'react';
import './App.css';

class CreateExcursion extends Component {
  render() {
    return (
      <div className="CreateExcursion">
        <form>
        Excursion Name:
        <input type="text" />
        <br />
        Leader:
        <input type="text" />
        <br />
        Cost:
        <input type="text" />
        <br />
        Description
        <textarea name="message" rows="10" cols="30" />
        <br />
        <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default CreateExcursion;
