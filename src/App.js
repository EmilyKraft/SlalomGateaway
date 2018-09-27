import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './store';
import { connect } from 'react-redux';
import HomePage from "./HomePage";
import CreateBus from "./CreateBus";
import './App.css';
import CreateExcursion from "./CreateExcursion";
import TransportationPage from "./TransportationPage";
import ExcursionPage from "./ExcursionPage";
import SchedulePage from "./SchedulePage";
import ContactPage from "./ContactPage";
import FaqPage from "./FaqPage";
import { simpleAction } from './actions/simpleAction'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <header className="App-header">
        <img src="http://www.winewomenandshoes.com/wp-content/uploads/2016/10/slalom-logo-blue-SPOT-7460C.jpg" width="10%" alt="slalom logo"/>
          <h1 className="App-title">Gateaway 2019</h1>
        </header>
        <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/schedule">Schedule</NavLink></li>
        <li><NavLink to="/transportation">Transportation</NavLink></li>
        <li><NavLink to="/excursions">Excursions</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/faq">FAQs</NavLink></li>
        </ul>
      <div className="content">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/schedule" component={SchedulePage} />
      <Route exact path="/transportation" component={TransportationPage} />
      <Route exact path="/transportation/create" component={CreateBus} />
      <Route exact path="/excursions" component={ExcursionPage} />
      <Route exact path="/excursions/create" component={CreateExcursion} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/faq" component={FaqPage} />
      </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
