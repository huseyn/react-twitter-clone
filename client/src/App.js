import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import PostState from './context/post/PostState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

  return (
    <AuthState>
      <PostState>
        <AlertState>
          <Router>
            <div className="App">
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/profile' component={Profile} />
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
