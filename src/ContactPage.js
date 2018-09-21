import React, { Component } from 'react';
import './App.css';
import { NavLink } from "react-router-dom";

class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage">
      <form>
      Email Address:
      <input type="text" label="Departure Time" />
<br />
Name:
<input type="text" />
<br />
      Message Text:
      <textarea name="message" rows="10" cols="30" />
      <br />
      <input type="submit" value="Send" />
      <button>Cancel</button>
      </form>
      </div>
    );
  }
}

export default ContactPage;
