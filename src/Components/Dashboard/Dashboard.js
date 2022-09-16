import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, NavLink, Route, Link, Switch } from "react-router-dom";
import Home from '../Home/Home';
import Bookmark from '../Bookmark/Bookmark';
import './Dashboard.css'
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/Dashboard"  >
              <Home />
            </Route>
            <Route path="/Home"  >
              <Home />
            </Route>
            <Route path="/Bookmark"  >
              <Bookmark />
            </Route>
          </Switch>
        </div >
      </>
    )
  }
}
