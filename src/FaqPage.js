import React, { Component } from 'react';
import './App.css';

class FaqPage extends Component {
  render() {
    return (
      <div className="FaqPage">
      <p><b>Will this cost me money?</b></p>
      <p>Slalom will be paying for transportation to and from Chicago, hotel for two nights,
      a welcome party on Friday night, and a dinner on Saturday night. All costs associated with other
      activities will be the responsibility of the attendee and their plus one.</p>
      <br />
      <p><b>When do I need to be signed up for excursions</b></p>
      <p>Signups for excursions will close on October 2nd. Please be sure to sign up before that date.</p>
      <br />
      <p><b>What if I want to stay in Chicago for extra days?</b></p>
      <p>Please contact the Chicago Downtown Hilton and reference Slalom for reduced rates on additional nights.</p>
      </div>
    );
  }
}

export default FaqPage;
