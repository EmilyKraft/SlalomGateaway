import React, { Component } from 'react';
import './App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
      <p>Thank you for all your hard work this last year!</p>
      <p className="App-intro">This year, we're headed to the windy city, Chicago!</p>
      <img src="https://media-cdn.tripadvisor.com/media/photo-w/07/72/27/a3/chicago.jpg" width="75%"/>
      </div>
    );
  }
}

export default HomePage;
