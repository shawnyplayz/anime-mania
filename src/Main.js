import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Home from './Components/Home/Home';
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
                  <Home />
                </Route>
                <Route path="/anime" >
                  <Home />
                </Route>
              </Switch >
            </Router >
          </Suspense >
        </div >
      </div >

    )
  }
}
// function mapStateToProps(state) {
//   return state
// }
// export default connect(mapStateToProps)(Main);