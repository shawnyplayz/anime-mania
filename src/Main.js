import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import "./Main.css"

export default class Main extends Component {

  render() {
    return (
      <div className="">
        <div className='main_container'>
          <Suspense fallback="loading">
            <Router>
              <Switch>

                <Route exact path="/" >
                  <Dashboard />
                </Route>
                <Route path="/Home" >
                  <Dashboard />
                </Route>
                <Route path="/Bookmark" >
                  <Dashboard />
                </Route>
              </Switch >
            </Router >
          </Suspense >
        </div >
      </div>

    )
  }
}
// function mapStateToProps(state) {
//   return state
// }
// export default connect(mapStateToProps)(Main);