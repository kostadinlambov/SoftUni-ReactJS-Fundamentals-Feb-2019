import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import Navbar from './common/Navbar'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    const loggedIn = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin') === 'true'
    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('token') != null)
    debugger;
    return (
      <div className="App">
        <Fragment>
          <Navbar loggedIn={localStorage.getItem('token') != null} onLogout={this.onLogout} />
          <ToastContainer closeButton={false} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {isAdmin && <Route exact path="/create" component={Create} />}
            <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </div>
    );
  }
}

export default withRouter(App);
