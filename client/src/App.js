import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import PostState from './context/post/PostState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  return (
    <AuthState>
      <PostState>
        <AlertState>
          <Router>
            <div className="App">
              <Alerts />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </PostState>
    </AuthState>
  );
}

export default App;
