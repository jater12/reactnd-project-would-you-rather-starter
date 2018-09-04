import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import SignIn from './SignIn.js'
import Home from './home.js'
import LeaderBoard from './Leaderboard'
import CreateNewQuestion from './CreateNewQuestion'
import Poll from './Poll.js'
class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Router>
          {this.props.loading === true ? null : this.props.signedIn === true ? <SignIn /> : <div>
              <Route path='/' exact component={Home}/>
              <Route path='/leaderboard' exact component={LeaderBoard}/>
              <Route path='/question/:id' component={Poll} />
              <Route path='/add' component={CreateNewQuestion} />
            </div>
          }
        </Router>
      </Fragment>
    );
  }
}

function mapStateToProps({authedUser, user}) {
  return {
    signedIn: authedUser === null,
    loading: Object.keys(user).length === 0
  }
}

export default connect(mapStateToProps)(App);
